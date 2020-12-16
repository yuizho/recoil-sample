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
