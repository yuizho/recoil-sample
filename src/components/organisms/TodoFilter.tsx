import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { filterState, FilterType } from 'state/TodoState';

const TodoFilter: FC = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const changeFilter = (text: React.ReactText) => {
    setFilter(text as FilterType);
  };

  return (
    <div>
      <RadioGroup onChange={(event) => changeFilter(event)} value={filter}>
        <Stack direction="row">
          <Radio value="ALL">ALL</Radio>
          <Radio value="COMPLETED">COMPLETED</Radio>
          <Radio value="UNCOMPLETED">UNCOMPLETED</Radio>
        </Stack>
      </RadioGroup>
    </div>
  );
};

export default TodoFilter;
