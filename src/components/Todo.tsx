import React, { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todosState } from 'state/TodoState';
import TodoItem from './organisms/TodoItem';
import TodoItemCreator from './organisms/TodoItemCreator';

const Todo: FC = () => {
  const todos = useRecoilValue(todosState);

  return (
    <>
      <h1>Todo</h1>
      <TodoItemCreator />
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
