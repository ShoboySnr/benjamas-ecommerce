import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const SVG = styled.svg.attrs(({ className }) => ({
  className,
}))`
  margin: auto;
  ;background: 0 0;
`;

const Loader: React.FC<Props> = ({ className }) => (
  <div className="flex text-center w-full justify-center">
    <SVG xmlns="http://www.w3.org/2000/svg" className={className} width="88" height="88" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" display="block"><circle cx="50" cy="50" fill="none" stroke="#000" stroke-width="4" r="18" stroke-dasharray="84.82300164692441 30.274333882308138"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.5434782608695652s" values="0 50 50;360 50 50" keyTimes="0;1"/></circle></SVG>
  </div>
  );

export default Loader;