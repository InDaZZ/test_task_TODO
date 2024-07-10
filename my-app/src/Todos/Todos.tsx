import './Todos.css'
import TodoInterface from '../../types/TodoInterface';
import NewTodosForm from '../newTodosInput/NewTodosForm';
import Todo from '../Todo/Todo';
import { useId, useState } from 'react';
interface TodosProps {
    todos: TodoInterface[],
    setNewTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>,
    setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>,
    setEditedTodo: React.Dispatch<React.SetStateAction<TodoInterface>>
};

function Todos({ todos, setNewTodos, setIsOpenPopup, setEditedTodo }: TodosProps) {

    const id = useId();
    const [filterAll, setFilterAll] = useState<boolean>(true);
    const [filteDone, setFilterDone] = useState<boolean>(false);
    const [filterCurrent, setFilterCurrent] = useState<boolean>(false);


    function renderTodos(todos: TodoInterface[]) {

        if (filterCurrent && todos.length !== 0) {
            if (todos.length !== 0) {
                return todos.map((item) => {
                    if (item.state === false) {
                        return <Todo todo={item} todos={todos} setTodos={setNewTodos} setIsOpenPopup={setIsOpenPopup} setEditedTodo={setEditedTodo} key={item.id}></Todo>
                    }
                });
            };
        }

        if (filteDone && todos.length !== 0) {
            if (todos.length !== 0) {
                return todos.map((item) => {
                    if (item.state === true) {
                        return <Todo todo={item} todos={todos} setTodos={setNewTodos} setIsOpenPopup={setIsOpenPopup} setEditedTodo={setEditedTodo} key={item.id}></Todo>
                    }
                });
            };
        }

        if (filterAll && todos.length !== 0) {
            return todos.map((item, index) => {
                item.id = `${id + index}`
                return <Todo todo={item} todos={todos} setTodos={setNewTodos} setIsOpenPopup={setIsOpenPopup} setEditedTodo={setEditedTodo} key={item.id}></Todo>
            });
        }
        else return
    };

    return (
        <main className="todos">
            <h1 className='todos__title'>Задачи на сегодня</h1>
            <div className='todos__filters'>
                <button className={`todos__filter todos__filter_all ${filterAll && 'todos__filter_active'}`} onClick={() => {
                    setFilterAll(true)
                    setFilterDone(false)
                    setFilterCurrent(false)
                }}>Все</button>
                <button className={`todos__filter todos__filter_current ${filterCurrent && 'todos__filter_active'}`} onClick={() => {
                    setFilterAll(false)
                    setFilterDone(false)
                    setFilterCurrent(true)
                }}>Текущие</button>
                <button className={`todos__filter todos__filter__done ${filteDone && 'todos__filter_active'}`} onClick={() => {
                    setFilterAll(false)
                    setFilterDone(true)
                    setFilterCurrent(false)
                }}>Завершенные</button>
            </div>
            <NewTodosForm setNewTodos={setNewTodos}></NewTodosForm>
            {(todos.length !== 0) ? renderTodos(todos) : <div className='todos__default-message'>ВАШИ ЦЕЛИ</div>}
        </main>
    )
};
export default Todos;