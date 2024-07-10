import TodoInterface from '../../types/TodoInterface';
import './Todo.css'
import { useState } from 'react';

interface TodoProps {
   todo: TodoInterface,
   todos: TodoInterface[],
   setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>,
   setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>,
   setEditedTodo: React.Dispatch<React.SetStateAction<TodoInterface>>

}

function Todo({ todos, setTodos, todo, setIsOpenPopup, setEditedTodo }: TodoProps) {

   const [todoCompletedState, setTodoCompletedState] = useState<boolean>(false);

   function togleTodoStatusClick(todoButtonStatus: boolean) {
      if (todoButtonStatus === false) {
         setTodos((prev) => {
            prev.findIndex((item) => item.id === todo.id)
            prev[prev.findIndex((item) => item.id === todo.id)].state = true
            return [...prev]
         })
         setTodoCompletedState(true)
      }
      else {
         setTodos((prev) => {
            prev.findIndex((item) => item.id === todo.id)
            prev[prev.findIndex((item) => item.id === todo.id)].state = false
            return [...prev]
         })
         setTodoCompletedState(false)
      }
   };

   function deletTodo(todos: TodoInterface[], setTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>>) {
      const index = todos.indexOf(todo)
      todos.splice(index, 1)
      setTodos((prev) => {
         return [...prev]
      })
   };

   function editTodo() {
      setIsOpenPopup(true)
      setEditedTodo(todo)
   }

   return (
      <div className='todo' data-testid="todo" key={todo.id}>
         <div className={`todo-container ${todo.state ? 'todo_completed' : 'todo_not-completed'}`} data-testid="todo-container">
            <div className='todo__task'>
               <button type='button' className={todo.state ? 'todo__buttone-done todo__buttone-done_active' : 'todo__buttone-done'} data-testid="todo__button" onClick={() => togleTodoStatusClick(todo.state)}></button>
               <span className={`todo__title ${todo.state ? 'todo__title_completed' : 'todo__title_not-completed'}`} >{todo.title}</span>
            </div>
            <div className='todo__control-container'>
               <button className='todo__button todo__button_delete' onClick={() => deletTodo(todos, setTodos)}></button>
               <button className='todo__button todo__button_edit' onClick={() => {
                  editTodo()
               }}></button>
            </div>
         </div>
         <div className='todo__status'>{todoCompletedState ? 'Выполненно' : 'Текущая'}</div>
      </div>
   )
}

export default Todo;