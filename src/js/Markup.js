export const markup = ({ id, text, isDone }) => `<li class="todo-list__item" data-id="${id}">
        <div class="todo-list__item-div">
            <p class="todo-list__item-text">${text}</p>
            <input type="checkbox" class="todo-list__item-checkbox" data-action="toggle" ${isDone ? 'checked' : ''}></checkbox>
            <button class="todo-list__item-view" data-action="view" type="button">V</button>
            <button class="todo-list__item-delete" data-action="delete" type="button">X</button>
        </div>
    </li>`