import { useTodo } from 'hooks/useTodo';
import { Title, TodoForm, TodoList } from 'components';
import s from './Main.module.css';

export const Main = () => {
  const { filteredTodos, addTodo, toggleTodo } = useTodo();

  return (
    <div className={s.main} data-testid="main">
      <Title level={1} text={'Todos'}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={filteredTodos} toggleCompleteTodo={toggleTodo}/>
    </div>
  )
}
