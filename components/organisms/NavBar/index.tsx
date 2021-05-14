import React from 'react';
import UnAuthed from './UnAuthed';
import LogoWrapper from './LogoWrapper'
import { AuthWrapper } from './styles';
import { Border } from '~atoms/Border';

const NavBar: React.FC<{}> = () => {
  return (<AuthWrapper><><UnAuthed /><Border /></></AuthWrapper>);
}

export default NavBar;