import styled from 'styled-components';


export const Wrapper = styled.div.attrs(() => ({
  className: 'w-full'
}))`
  width: 100%;
`;

export const FilterWrapper = styled.div.attrs(() => ({
  className: 'w-full flex justify-between items-center'
}))`
  padding-top: 4.25rem;
  padding-bottom: 3.937rem;

  .category-title {
    font-weight: bold;
    font-size: 1.875rem;
    line-height: 2.062rem;

    span {
      font-weight: 300;
      font-style: normal;
      color: #9B9B9B;
    }
  }

  p {
    font-size: 1.375rem;
    line-height: 1.5rem;
    color: #9B9B9B;
    margin-left: 0.437rem;
  }

  select {
    margin-left: 0.937rem;
    max-width: 80px;
  }
`;

export const CategoryProductWrapper = styled.div.attrs(() => ({
  className: 'w-full flex items-start'
}))``;


export const FilterGroups = styled.div.attrs(() => ({
  className: 'w-full'
}))`
  max-width: 16.75rem;
  margin-bottom: 7.312rem;
  margin-right: 3.125rem;

  h1 {
    font-size: 1.375rem;
    line-height: 1.5rem;
    font-weight: bold;
  }
`;

export const InputGroup = styled.button.attrs(() => ({
  className: 'flex items-center'
}))`
  margin-top: 2.5rem;
`

export const ProductGroups = styled.div.attrs(() => ({
  className: 'w-full grid'
}))`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 3.018rem;
  margin-bottom: 6.687rem;
`;

export const ProductWrapper = styled.div.attrs(() => ({
  className: 'flex flex-col',
}))``;