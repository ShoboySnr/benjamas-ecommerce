import styled from 'styled-components';

export const AboutWrapper = styled.div.attrs(() => ({
  className: 'flex justify-between items-start w-full'
}))`
  padding-bottom: 2.625rem;

  .max-width-text {
    max-width: 690px;
  }
`;