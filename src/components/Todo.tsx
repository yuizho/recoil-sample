import { Container, Heading } from '@chakra-ui/react';
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
      <Container mt={4}>
        <Heading>Todo</Heading>
        <br />
        <TodoItemCreator />
        <br />
        <TodoFilter />
        <br />
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
          />
        ))}
      </Container>
    </>
  );
};

export default Todo;
