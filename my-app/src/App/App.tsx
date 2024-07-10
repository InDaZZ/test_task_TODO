import { FormEvent, useState } from 'react';
import './App.css';
import TodoInterface from '../../types/TodoInterface';
import Todos from '../Todos/Todos';

import PopupEdit from '../Popup/Popup';

function App() {

  const [todos, setNewTodos] = useState<TodoInterface[]>([]);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<TodoInterface>({
    title: '',
    state: false,
    id: 'string',
  });

  function editPopupHandle(evt: FormEvent, editedTodo: TodoInterface, newTitle: string) {

    evt.preventDefault()
    if (newTitle.length != 0) {
      setNewTodos((prev) => {
        prev.forEach(element => {
          if (element.id === editedTodo.id) {
            element.title = newTitle
          }
        });
        return [...prev]
      })
    };
  };

  console.log(todos)
  return (
    <div className="App">
      <Todos todos={todos} setNewTodos={setNewTodos} setIsOpenPopup={setIsOpenPopup} setEditedTodo={setEditedTodo}></Todos>
      <PopupEdit isOpen={isOpenPopup} onClose={setIsOpenPopup} onSubmit={editPopupHandle} editedTodo={editedTodo}></PopupEdit>
    </div>
  );
};

export default App;
