import React from 'react';

interface Props {
  className?: string;
}

const Cancel: React.FC<Props> = ({ className }) => (
  <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 2l18 18M2 20L20 2" stroke="#000" strokeWidth="4"/>
  </svg>
);

export default Cancel;