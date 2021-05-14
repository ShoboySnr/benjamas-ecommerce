import styled from 'styled-components';

const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}rem`};
  @media screen and (max-width: 1024px) {
    height: ${({ height }) => `${height / 2}rem`};
  }
`;

export default Spacer;