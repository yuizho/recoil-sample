import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CharacterCount from './organisms/CharacterCount';
import TextInput from './organisms/TextInput';

const Counter: FC = () => (
  <>
    <TextInput />
    <CharacterCount />
    <br />
    <Link to="/counter"> aaa</Link>
  </>
);

export default Counter;
