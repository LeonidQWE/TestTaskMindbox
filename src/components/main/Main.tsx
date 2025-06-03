import { useTodo } from 'hooks/useTodo';
import { Controls, Title, TodoForm, TodoList } from 'components';
import s from './Main.module.css';

export const Main = () => {
  const {
    filteredTodos,
    filter,
    addTodo,
    toggleTodo,
    activeTodoCount,
    completedTodoCount,
    resetCompletedTodos,
    setFilter
  } = useTodo();

  return (
    <div className={s.main} data-testid="main">
      <Title level={1} text={'Todos'}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={filteredTodos} toggleCompleteTodo={toggleTodo}/>
      <Controls
        activeTodoCount={activeTodoCount}
        completedTodoExist={!!completedTodoCount}
        resetCompletedTodos={resetCompletedTodos}
        filter={filter}
        setFilter={setFilter}/>
    </div>
  )
}
