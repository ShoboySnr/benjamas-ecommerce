import styled from 'styled-components';

export const Card = styled.a.attrs(() => ({
  className: 'w-full'
}))`
  max-width: 17.607rem;

  &:hover {
    .show-cart-button {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ImageWrapper = styled.div.attrs(() => ({
  className: 'relative w-full h-full',
}))`
  max-height: 24.92rem;
`;

export const BestSellerWrapper = styled.div.attrs(() => ({
  className: 'absolute top-0 left-0 bg-white'
}))`
  padding: 0.486rem 0.443rem 0.486rem 1.225rem;
  font-size: 1.25rem;
  font-weight: 1.375rem;
`;

export const CartWrapper = styled.div.attrs(({ className }) => ({
  className: `absolute w-full text-center bg-black text-white uppercase ${className}`
}))`
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s linear;
  bottom: 0px;

  button {
    font-size: 1.437rem;
    line-height: 1.562rem;
    text-align: center;
    letter-spacing: 0.07em;
  }
`;

export const ProductDetail = styled.div.attrs(() => ({
  className: 'flex flex-col text-left'
}))`
  margin-top: 0.5rem;

  .category {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 1.5rem;
    color: #656565;
  }

  h2 {
    font-weight: bold;
    font-size: 2.125rem;
    line-height: 2.312rem;
  }

  .price {
    font-size: 1.812rem;
    line-height: 2rem;
    color: #656565;
  }
`;