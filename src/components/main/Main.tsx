import { Title, TodoForm } from 'components';
import s from './Main.module.css';
import { useTodo } from 'hooks/useTodo';

export const Main = () => {
  const { addTodo } = useTodo();

  return (
    <div className={s.main} data-testid="main">
      <Title level={1} text={'Todos'}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
