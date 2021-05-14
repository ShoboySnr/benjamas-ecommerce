import styled from 'styled-components';

export const PeopleAlsoBuyWrapper = styled.div.attrs(({ className }) => ({
  className: `w-full flex flex-col justify-end text-right ${className}`,
}))`
  
  h1 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.5rem;
    margin-bottom: 1.687rem;
  }
`;

export const ImageWrapper = styled.div.attrs(() => ({
  className: 'flex justify-end items-start'
}))`
  img {
    margin-left: 1.875rem;
  }
`;

export const DetailsWrapper = styled.div.attrs(() => ({
  className: 'text-right'
}))`
  margin-top: 3.375rem;

  h3 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.5rem;
    margin-bottom: 0.562rem;
  }
  
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.062rem;
    color: #656565;
    margin-bottom: 0.437rem;
  }
`;