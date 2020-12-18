import React, { FC, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todosState } from 'state/TodoState';
import { Button, Container, Input, Tooltip } from '@chakra-ui/react';

const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [disabled, setDisabled] = useState(true);
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
    const inputValue = event.target.value;
    setDisabled(inputValue ? false : true);
    setInputValue(inputValue);
  };

  return (
    <Container pt={4} pb={4} borderWidth="1px" borderRadius="lg">
      <Input value={inputValue} placeholder="todo item" onChange={onChange} />
      <Button mt={4} colorScheme="teal" onClick={addItem} isDisabled={disabled}>
        Add
      </Button>
    </Container>
  );
};

export default TodoItemCreator;
