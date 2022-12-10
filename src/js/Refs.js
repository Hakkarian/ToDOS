const refs = {
    form: document.querySelector('.todo-form'),
    input: document.querySelector('.todo-form__label-input'),
    button: document.querySelector('.todo-form__button'),
    list: document.querySelector('.todo-list'),
    item: document.querySelector('.todo-list__item'),
    buttonDelete: document.querySelector('.todo-list__item-delete'),
    buttonView: document.querySelector('.todo-list__item-view'),
    modal: document.querySelector('.modal'),
    modalText: document.querySelector('.modal-text'),
    timerDiv: document.querySelector('div[id="timer-1"]'),

}

const { form, input, button, list, item, buttonDelete, modal, modalText, timerDiv } = refs;


export { form, input, button, list, item, buttonDelete, modal, modalText, timerDiv }