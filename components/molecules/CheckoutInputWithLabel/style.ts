import styled from 'styled-components';

export const CheckBoxWrapper = styled.div.attrs(() => ({
  className: 'flex relative'
}))`
  margin-right: 1.437rem;

  input:checked {
    & ~ .checkmark {
      &:after {
        display: block;
      }
    }
  }

  .checkmark {
    height: 1.437rem;
    width: 1.437rem;
    border: 2px solid #000000;
    background-color: transparent;

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 8px;
      top: 6px;
      width: 6px;
      height: 12px;
      border: solid #000000;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      
    }
  }
`;