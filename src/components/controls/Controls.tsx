import { Button } from 'components';
import { Filter } from 'types/Filter';
import s from './Controls.module.css';

type TodosActionsProps = {
  activeTodoCount: number;
  completedTodoExist: boolean;
  resetCompletedTodos: () => void;
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export const Controls = ({
  activeTodoCount,
  completedTodoExist,
  resetCompletedTodos,
  filter,
  setFilter,
}: TodosActionsProps) => {
  return (
    <div className={s.container} data-testid='controls'>
      <p className={s.activeTodoCount}>{activeTodoCount} items left</p>

      <div>
        <Button
          title='Show all todos'
          onClick={() => setFilter('all')}
          typeParams={{type: 'select', isSelected: filter === 'all'}}>
            All
        </Button>
        <Button
          title='Show active todos'
          onClick={() => setFilter('active')}
          typeParams={{type: 'select', isSelected: filter === 'active'}}>
            Active
        </Button>
        <Button
          title='Show completed todos'
          onClick={() => setFilter('completed')}
          typeParams={{type: 'select', isSelected: filter === 'completed'}}>
            Completed
        </Button>
      </div>

      <Button
        data-testid='resetCompletedTodos'
        title="Reset Completed Todos"
        onClick={resetCompletedTodos}
        disabled={!completedTodoExist}>
          Clear completed
      </Button>
    </div>
  )
}
