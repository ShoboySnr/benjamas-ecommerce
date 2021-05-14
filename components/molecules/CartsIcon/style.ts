import styled from 'styled-components';

export const CartWrapper = styled.div.attrs(() => ({
  className: 'relative'
}))`
  .toggle-item {
    visibility: visible;
    opacity: 1;
  }
`;

export const ItemBox = styled.div.attrs(() => ({
  className: 'bg-black text-white text-center absolute'
}))`
  font-size: 1.25rem;
  line-height: 1.375rem;
  padding: 0 0.25rem;
  bottom: -13px;
  right: -10px;
`

export const CartItemWrapper = styled.div.attrs(({ className }) => ({
  className: `absolute w-screen bg-white text-white right-0 ${className}`
}))`
  max-width: 27.687rem;
  padding: 1.375rem 1.687rem;
  border: 4px solid #E4E4E4;
  box-sizing: border-box;
  top: 6.25rem;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s linear;

  button {
    font-size: 1.437rem;
    font-weight: 500;
    line-height: 1.562rem;
  }
`

export const CancelWrapper = styled.button.attrs(() => ({
  className: 'flex justify-end w-full'
}))``