import styled from 'styled-components';

const Label = styled.label.attrs(({ className }) => ({ className: `flex ${className}` }))`
  font-size: 1.375rem;
  font-weight: 300;
  line-height: 1.5rem;

  &:hover {
    input {
      & ~ .checkmark {
        &:after {
          border-color: #000000;
        }
      }
    }
  }
`;

export default Label;