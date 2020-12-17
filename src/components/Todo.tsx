import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoState } from 'state/TodoState';
import TodoFilter from './organisms/TodoFilter';
import TodoItem from './organisms/TodoItem';
import TodoItemCreator from './organisms/TodoItemCreator';

const Todo: FC = () => {
  const todos = useRecoilValue(filteredTodoState);

  return (
    <>
      <h1>Todo</h1>
      <TodoItemCreator />
      <TodoFilter />
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          isCompleted={todo.isCompleted}
        />
      ))}
    </>
  );
};

export default Todo;
