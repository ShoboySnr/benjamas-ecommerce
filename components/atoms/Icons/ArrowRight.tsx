import React from 'react';

interface Props {
  className?: string;
}

const ArrowRight: React.FC<Props> = ({ className }) => (
  <svg width="13" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 2l8 8-8 8" stroke="#000" strokeWidth="3"/>
  </svg>
);

export default ArrowRight;