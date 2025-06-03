import { render, screen } from '@testing-library/react';
import { Controls } from 'components';
import { Filter } from 'types/Filter';

export const setupTodosActions = (completedTodoExist = true, filter: Filter = 'all') => {
  const resetCompletedTodos = jest.fn();
  const setFilter = jest.fn();

  render(<Controls
    activeTodoCount={2}
    completedTodoExist={completedTodoExist}
    resetCompletedTodos={resetCompletedTodos}
    filter={filter}
    setFilter={setFilter}/>);

  const controlsElement = screen.getByTestId('controls');
  const clearCompletedTodosButton = screen.getByTitle('Reset Completed Todos');
  const showAllTodosButton = screen.getByTitle('Show all todos');
  const showCompletedTodosButton = screen.getByTitle('Show completed todos');
  const showActiveTodosButton = screen.getByTitle('Show active todos');
  const activeTodoCountText = screen.getByTestId('activeTodoCount');

  return {
    controlsElement,
    resetCompletedTodos,
    clearCompletedTodosButton,
    setFilter,
    showAllTodosButton,
    showCompletedTodosButton,
    showActiveTodosButton,
    activeTodoCountText,
  };
}
