import styledMap from 'styled-map';
import styled from 'styled-components';

export const PhotoOfDayWrapper = styled.div.attrs(() => ({
  className: 'relative',
}))`
  margin-bottom: 2.625rem;

  .text-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
    padding: 1.312rem 3.538rem 1.812rem;

    p {
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 1.375rem;
    }
  }
`

export const PhotoOfDayContainer = styled.div.attrs(() => ({
  className: 'w-full relative',
}))`

`

export const LogoTextWrapper = styled.div.attrs(() => ({
  className: 'flex items-center justify-between'
}))`
  padding-top: 3.625rem;
  padding-bottom: 1.687rem;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.187rem;
    color: #000000;
    text-transform: capitalize;
  }
`;

export const PhotoOfDayAboutWrapper = styled.div.attrs(({ className }) => ({
  className: `w-full flex flex-col justify-start ${className}`,
}))`
  
  h1,
  h3 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.5rem;
    margin-bottom: 0.562rem;
  }

  p {
    margin-top: 0.75rem;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #656565;
  }
`;

export const AboutWrapper = styled.div.attrs(() => ({
  className: 'flex justify-between items-start w-full'
}))`
  padding-bottom: 2.625rem;

  .max-width-text {
    max-width: 690px;
  }
`;

export const Wrapper = styled.div.attrs(() => ({
  className: 'w-full'
}))`
  width: 100%;
`;