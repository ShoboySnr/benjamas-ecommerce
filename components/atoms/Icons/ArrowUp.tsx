import React from 'react';

interface Props {
  className?: string;
}

const ArrowUp: React.FC<Props> = ({ className }) => (
  <svg width="7" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3.648 14.373V1.535L5.904 3.79c.074.074.169.11.267.11a.374.374 0 00.267-.64L3.54.364a.385.385 0 00-.53 0L.11 3.26a.374.374 0 000 .53.374.374 0 00.53 0l2.256-2.256v12.838c0 .209.169.378.377.378a.38.38 0 00.374-.378z" fill="#000"/>
  </svg>
);

export default ArrowUp;