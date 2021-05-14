import styled from 'styled-components';

const Input = styled.input.attrs(({ className }) => ({
  className: `appearance-none inline-flex items-center ${className ??
    ''}`,
}))`
  background-color: #ffffff;
  font-size: 1.375rem;
  color: ${({ theme }) => theme.color.black};
`;

export const CheckBox = styled.input.attrs(({ className }) => ({
  className: `absolute ${className}`,
  type: 'checkbox',
}))`
  opacity: 0;
  height: 0;
  width: 0;
`

export const RadioBox = styled(CheckBox).attrs(() => ({
  type: 'radio',
}))``;

export default Input;