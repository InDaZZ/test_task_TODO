import './TodosFilter.css';
import TodoInterface from '../../types/TodoInterface';

interface TodosFilterProps {
    todos: TodoInterface[],
    setFilteredTodos: React.Dispatch<React.SetStateAction<TodoInterface[]>> ,
}

function TodosFilter({ todos, setFilteredTodos }: TodosFilterProps) {
    return (
        <section className="todos-filter-container">
            <button type='button' className="todos-filter todos-filter_all">Все</button>
            <button type='button' className="todos-filter todos-filter_complete">Выполненные</button>
            <button type='button' className="todos-filter todos-filter_not-complete">Не Выполненные</button>
        </section>
    )
};

export default TodosFilter;