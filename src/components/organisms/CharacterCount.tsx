import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../../state/TextState';

const CharacterCount: FC = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};

export default CharacterCount;
