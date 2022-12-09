import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss'

import module from './module1';
import './css/style.scss';
import { markup } from './js/Markup';
import { form, input, button, list, item, buttonDelete, buttonView, modal } from './js/Refs'
import { setLocalSt, getLocalSt, remLocalSt } from './js/localSt-try-catch';
import { debounce } from './js/Debounce'
import { createData, fetchData, updateData, deleteData } from './js/todosApi';

//toastr library
//lodash.debounce
//uuid library
let items = [];

input.focus();

const instance = basicLightbox.create(`
    <div class="modal">
        <p class="modal-text">
            Created: ${new Date()}
        </p>
        <button class="modal-button" type="button">Close</button>
    </div>
`);

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
    items = items.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item)
    updateData(items);
    console.table(items)
    console.log('My', id)
}
const viewItem = (id) => {
    console.log('My', id)

    instance.show()
}
const removeItem = (id) => {
    items = items.filter(item => {
        console.log(item.id)
        console.log(id)
        return item.id !== id
    });
    deleteData(items)
    render()
    console.log('delete', id)

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

const loadData = () => {
    items = fetchData();
}

const onSubmit = (e) => {
    e.preventDefault()
    const { value } = e.target.elements.text
    const payload = {
        id: JSON.stringify(Date.now()), //uuid.v4()
        text: value,
        isDone: false,
        created: new Date()
    }
    addItem(payload)
    createData(items)
    render();
}

const onClose = () => {
    instance.close();
}
const onModalEscape = (e) => {
    e.code === "Escape" ? instance.close() : undefined;
}

loadData();
render();

list.addEventListener('click', debounce(onListClick, 500));
form.addEventListener('submit', onSubmit);
modalButton.addEventListener('click', onClose)
window.addEventListener('keydown', onModalEscape)

