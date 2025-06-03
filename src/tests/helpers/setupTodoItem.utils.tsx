import { render } from '@testing-library/react';
import { TodoItem } from 'components';

export const setupTodoItem = (overrides = {}) => {
  const todo = { id: '1', title: 'Test todo', completed: false, ...overrides };
  const toggleTodo = jest.fn();

  render(<TodoItem todo={todo} toggleCompleteTodo={toggleTodo}/>)

  return { todo, toggleTodo };
}
