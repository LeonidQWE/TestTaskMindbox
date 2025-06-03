import { useState } from 'react';
import { TodoTask } from 'classes/TodoTask';
import { Todo } from 'types/Todo';
import { Filter } from 'types/Filter';

export const useTodo = (initialTodos: Todo[] = []) => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = (text: string) => {
    if (!text) return;
    const newTodo: Todo = new TodoTask(text);
    setTodos([...todos, newTodo]);
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const resetCompletedTodos = () => setTodos(todos.filter((todo) => !todo.completed));

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;

    return todo;
  });

  const completedTodoCount = todos.filter((todo) => todo.completed).length;
  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  return {
    filteredTodos,
    filter,
    activeTodoCount,
    completedTodoCount,
    addTodo,
    toggleTodo,
    setFilter,
    resetCompletedTodos,
  };
};
