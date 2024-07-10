import { render, screen, fireEvent } from '@testing-library/react';
import Todos from '../Todos/Todos';
import Todo from './Todo';
import userEvent from '@testing-library/user-event';

const completTodo = { title: 'complet-todo', state: true, id: ':r1:0' }
const notCompletTodo = { title: 'not-complet-todo', state: false, id: ':r1:0' }

test('render complete Todo', () => {
    render(<Todos todos={[completTodo]} />);
    const Todo = screen.getByTestId('todo');
    const TodoContainer = screen.getByTestId('todo-container');
    expect(TodoContainer).toBeInTheDocument();
    expect(Todo).toBeInTheDocument();
    expect(screen.getByTestId('todo-container')).toHaveClass('todo_completed')
});
test('render not complete Todo', () => {
    render(<Todos todos={[notCompletTodo]} />);
    const Todo = screen.getByTestId('todo');
    const TodoContainer = screen.getByTestId('todo-container');
    expect(TodoContainer).toBeInTheDocument();
    expect(Todo).toBeInTheDocument();
    expect(screen.getByTestId('todo-container')).toHaveClass('todo_not-completed')
});