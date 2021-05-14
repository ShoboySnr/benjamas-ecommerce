import React from 'react';

interface Props {
  className?: string;
}

const ArrowDown: React.FC<Props> = ({ className }) => (
  <svg width="7" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3.46 14.637c.073.073.168.11.266.11a.373.373 0 00.267-.11L6.89 11.74a.374.374 0 000-.53.374.374 0 00-.53 0l-2.257 2.256V.626a.377.377 0 10-.754 0v12.84l-2.253-2.257a.374.374 0 00-.53 0 .374.374 0 000 .53l2.893 2.898z" fill="#000"/>
  </svg>
);

export default ArrowDown;