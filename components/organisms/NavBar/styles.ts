import styled from 'styled-components';


export const AuthWrapper = styled.nav.attrs(() => ({
  className: 'w-full bg-white',
}))`
  max-width: 80.625rem;
`;

export const Wrapper = styled.div.attrs(() => ({
  className: 'flex items-center justify-between'
}))`
  width: 100%;
  padding-top: 2.312rem;
  padding-bottom: 2.611rem;
`;

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
