import * as basicLightbox from 'basiclightbox';
import moment from 'moment/moment';
import toastr from 'toastr';
import { v4 as uuidv4 } from 'uuid';
import 'basiclightbox/src/styles/main.scss'




import '../css/style.scss';
import { markup } from './Markup';
import { form, input, button, list, item, buttonDelete, buttonView, modal } from './Refs'
import { setLocalSt, getLocalSt, remLocalSt } from './localSt-try-catch';
import { debounce } from './Debounce'
import { createData, fetchData, updateData, deleteData } from './todosApi';
import './Promises'
import './Fetch'


let items = [];

input.focus();

const instance = basicLightbox.create(`
    <div class="modal">
        <p class="modal-text">
            Created: 123
        </p>
        <button class="modal-button" type="button">Close</button>
    </div>
`); //moment(created).format('MMMM Do YYYY, HH:mm:ss a)

const modalButton = instance.element().querySelector('.modal-button')

const render = () => {
    console.log(items)
    list.innerHTML = '';
    const lis = items.map(markup).join('')
    list.insertAdjacentHTML('beforeend', lis)

}

const addItem = (text) => {

    items.push(text)
}


const toggleItem = (id) => {
    const item = items.find(item => item.id === id)
    items = items.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item)
    updateData(id, { ...item, isDone: !item.isDone }); //(id, { ...item, isDone: !item.isDone })
    console.table(items)
    console.log('My', id)
}
const modalText = instance.element().querySelector('.modal-text')
console.log(modalText)

const viewItem = (id) => {
    const { created } = items.find(item => item.id === id)
    modalText.textContent = moment(created).format('MMMM Do YYYY, HH:mm:ss a')
    instance.show();
}
const removeItem = (id) => {
    items = items.filter(item => {
        console.log(item.id)
        console.log(id)
        return item.id !== id
    });
    deleteData(id).then(() => {
        render()
    toastr.success('ToDOS has been removed succesfully!')
    })

}

const onListClick = (e) => {
    if (e.target === e.currentTarget) return

    const parent = e.target.closest('li')
    const { action } = e.target.dataset;
    const { id } = parent.dataset;

    switch (action) {
        case 'view':
            viewItem(id);
            break;
        case 'delete':
            removeItem(id);
            break;
        case 'toggle':
            toggleItem(id);
            break;

    }
}



const onSubmit = (e) => {
    e.preventDefault()
    const { value } = e.target.elements.text
    if (value === '') {
        toastr.error("Please, type something.")
        return
    }
    const payload = {
        id: uuidv4(),
        text: value,
        isDone: false,
        created: new Date()
    }
    createData(payload).then(newData => {
        addItem(newData)
        render();
        input.value = '';
    toastr.success('New ToDOS has been created succesfully!')
    })
}

const onClose = () => {
    instance.close();
}
const onModalEscape = (e) => {
    e.code === "Escape" ? instance.close() : undefined;
}

fetchData().then(data => {
    items = data
    render()
}).catch(error => console.log(error))


list.addEventListener('click', debounce(onListClick, 200));
form.addEventListener('submit', onSubmit);
modalButton.addEventListener('click', onClose)
window.addEventListener('keydown', onModalEscape)

