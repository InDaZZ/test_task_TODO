import { useState, useId } from "react";
import TodoInterface from '../../types/TodoInterface';
import './NewTodosForm.css'
import iconPlay from '../images/play-svgrepo-com.svg'

interface newTodosProps {
    setNewTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>
};

function NewTodosForm({ setNewTodos }: newTodosProps) {

    const [newTodoTitle, setNewTodoTitle] = useState<string>('');

    function createNewTodo(todoTitle: string, event: React.FormEvent) {
        if(todoTitle.length != 0) {
            event.preventDefault();
            setNewTodos(prev => {
                return [...prev, { title: todoTitle, state: false}]
            });
            setNewTodoTitle('')
        }
       return
    }

    return (
        <form className="todos-form" onSubmit={(event) => createNewTodo(newTodoTitle, event)}>
            <label htmlFor='todos-form__input' className='todos-form__label'>
                <input value={newTodoTitle} className="todos-form__input" onChange={(e) => { setNewTodoTitle(e.target.value) }} placeholder="Новая задача">
                </input>

            </label>
            <button data-testid="todos-form__button-submit" disabled={newTodoTitle.length === 0} type={"submit"} className="todos-form__button-submit"><img src={iconPlay} className="todos-form__icon-search"></img></button>
        </form>

    )
}

export default NewTodosForm;