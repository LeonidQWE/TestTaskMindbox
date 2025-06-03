import userEvent from '@testing-library/user-event';
import { setupTodosActions } from 'tests/helpers/setupControls.utils';
import { Filter } from 'types/Filter';

type Buttons = 'showAllTodosButton' | 'showCompletedTodosButton' | 'showActiveTodosButton';

describe('Controls', () => {
  it('should render Controls', () => {
    const {
      controlsElement,
      clearCompletedTodosButton,
      showAllTodosButton,
      showCompletedTodosButton,
      showActiveTodosButton,
      activeTodoCountText,
    } = setupTodosActions();

    [
      controlsElement,
      clearCompletedTodosButton,
      showAllTodosButton,
      showCompletedTodosButton,
      showActiveTodosButton,
      activeTodoCountText,
    ].forEach((element) => expect(element).toBeInTheDocument());
    expect(activeTodoCountText).toHaveTextContent('2 items left');
    expect(clearCompletedTodosButton).not.toBeDisabled();
  })

  it.each([
    { isNotDisabled: false, expected: 0},
    { isNotDisabled: true, expected: 1}
  ])('should click reset completed todos button if button is $isNotDisabled disabled',
    async ({ isNotDisabled, expected}) => {
      const { resetCompletedTodos, clearCompletedTodosButton } = setupTodosActions(isNotDisabled);

      await userEvent.click(clearCompletedTodosButton);

      expect(resetCompletedTodos).toHaveBeenCalledTimes(expected);
  })

  it.each([
    {filter: 'all', component: 'showAllTodosButton'},
    {filter: 'completed', component: 'showCompletedTodosButton'},
    {filter: 'active', component: 'showActiveTodosButton'},
  ] as Array<{filter: Filter; component: Buttons}>)('should click show $filter todos button',
    async ({filter, component}) => {
      const { setFilter, [component]: button } = setupTodosActions(true, filter);

      await userEvent.click(button);

      expect(setFilter).toHaveBeenCalledTimes(1);
      expect(button).toHaveClass('selected');
    }
  )
})
