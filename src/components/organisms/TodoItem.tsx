import React, { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from 'state/TodoState';

type Prop = {
  id: number;
  text: string;
  isCompleted: boolean;
};

const TodoItem: FC<Prop> = ({ id, text, isCompleted }) => {
  const [todos, setTodos] = useRecoilState(todosState);
  const index = todos.findIndex((todo) => todo.id === id);

  const complete = () => {
    const newTodos = [
      ...todos.slice(0, index),
      { id, text, isCompleted: !isCompleted },
      ...todos.slice(index + 1),
    ];
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        id={id.toString()}
        type="checkbox"
        onChange={complete}
        checked={isCompleted}
      />
      <label
        htmlFor={id.toString()}
        style={{ textDecorationLine: isCompleted ? 'line-through' : 'none' }}
        key={id}
      >
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
