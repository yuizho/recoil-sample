import { atom, selector } from 'recoil';

type TodoState = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export const todosState = atom<TodoState[]>({
  key: 'todoListState',
  default: [],
});

export type FilterType = 'ALL' | 'COMPLETED' | 'UNCOMPLETED';

export const filterState = atom<FilterType>({
  key: 'filterState',
  default: 'ALL',
});

export const filteredTodoState = selector({
  key: 'filteredTodoState',
  get: ({ get }) => {
    const todos = get(todosState);
    const filter = get(filterState);
    switch (filter) {
      case 'COMPLETED':
        return todos.filter((item) => item.isCompleted);
      case 'UNCOMPLETED':
        return todos.filter((item) => !item.isCompleted);
      default:
        return todos;
    }
  },
});
