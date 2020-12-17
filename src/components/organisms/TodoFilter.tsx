import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { filterState, FilterType } from 'state/TodoState';

const TodoFilter: FC = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const changeFilter = (filterType: FilterType) => {
    setFilter(filterType);
  };

  return (
    <div>
      <input
        name="filter"
        id="radio-all"
        type="radio"
        onChange={() => changeFilter('ALL')}
        checked={filter === 'ALL'}
      />
      <label htmlFor="radio-all">ALL</label>
      <input
        name="filter"
        id="radio-completed"
        type="radio"
        onChange={() => changeFilter('COMPLETED')}
        checked={filter === 'COMPLETED'}
      />
      <label htmlFor="radio-completed">COMPLETED</label>
      <input
        name="filter"
        id="radio-uncompleted"
        type="radio"
        onChange={() => changeFilter('UNCOMPLETED')}
        checked={filter === 'UNCOMPLETED'}
      />
      <label htmlFor="radio-uncompleted">UNCOMPLETED</label>
    </div>
  );
};

export default TodoFilter;
