import React, { FC, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todosState } from 'state/TodoState';

const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodos = useSetRecoilState(todosState);

  const addItem = () => {
    setTodos((oldTodoList) => [
      ...oldTodoList,
      {
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
