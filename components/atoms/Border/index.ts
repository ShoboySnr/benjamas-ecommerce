import styled from 'styled-components';

export const Border = styled.hr<{ border?: number }>`
  border: ${({ border }) => `${border || 2}px`} solid #E4E4E4;
  background-color: #E4E4E4;
  width: 100%;
`;