import { Todo } from 'types/Todo';
import s from './TodoItem.module.css';

type TodoItemProps = {
  todo: Todo;
  toggleCompleteTodo: (id: string) => void;
}

export const TodoItem = ({todo, toggleCompleteTodo}: TodoItemProps) => {
  return (
    <div className={`${s.todo} ${todo.completed ? s.todoCompleted : ''}`} data-testid='todoItem'>
      <label className={s.checkboxLabel}>
        <input
          data-testid='todoCompleteChackbox'
          type="checkbox"
          className={s.checkbox}
          onChange={() => toggleCompleteTodo(todo.id)}/>
        <span className={s.customCheckbox}></span>
      </label>
      <h2 className={`${s.todoTitle} ${todo.completed ? s.todoTitleCompleted : ''}`}>{todo.title}</h2>
    </div>
  )
}
