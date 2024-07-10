import React, { FormEvent, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import './Popup.css'
import TodoInterface from '../../types/TodoInterface';

interface PropsPopupEdit {
    isOpen: boolean,
    onClose: React.Dispatch<React.SetStateAction<boolean>>,
    onSubmit: (evt: FormEvent, editedTodo: TodoInterface, newTitle: string) => void,
    editedTodo: TodoInterface,

}

function PopupEdit({ isOpen, onClose, onSubmit, editedTodo, /* setNewTodos */ }: PropsPopupEdit) {

    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        setInputValue(editedTodo.title)
    }, [isOpen]);

    function inputChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(evt.target.value)
    }
    return (
        <div className={`popup ${isOpen ? "popup_active" : ""}`} >
            <div className="popup__container">
                <form className="popup__form" /* onSubmit={onSubmit} */>
                    <button type="button" className="popup__button-close" onClick={() => onClose(false)}></button>
                    <h2 className="popup__heading">Редакитрование</h2>
                    <input className="popup__text" value={inputValue} onChange={(evt) => inputChange(evt)}></input>
                    <button type="submit" className="popup__button" onClick={(event) => onSubmit(event, editedTodo, inputValue)}>Сохранить</button>
                </form>
            </div>
        </div>
    )
};

export default PopupEdit;