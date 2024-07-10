import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App/App';
import userEvent from '@testing-library/user-event';
import NewTodosForm from './NewTodosForm';



describe('tests NewTodosForm', ()=> {
    test('render todosForm', () => {
        render(<NewTodosForm />);
        const submitButton = screen.getByTestId('todos-form__button-submit');
        const newTodoInput = screen.getByPlaceholderText(/новая задача/i);
        expect(newTodoInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
    test('add New(first) Todo', () => {
        render(<App />);
        const newTodoInput = screen.getByPlaceholderText(/новая задача/i);
        const submitButton = screen.getByTestId('todos-form__button-submit');
        expect(submitButton).toBeInTheDocument();
        expect(screen.queryByTestId('todo')).toBeNull();
        userEvent.type(newTodoInput,'My First Todo')
        fireEvent.click(submitButton)
        expect(screen.queryByTestId('todo')).toBeInTheDocument();
    });
})