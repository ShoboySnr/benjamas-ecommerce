import styled from 'styled-components';

const SelectField = styled.select.attrs(({ className }) => ({
  className: `appearance-none outline:none focus:outline:none ${className}`,
}))`
  background-image: url('/images/dropdown.svg');
  color: ${({ theme }) => theme.color.gray3};
  font-size: 1.375rem;
  background-repeat: no-repeat;
  background-position: 100%;
  padding-right: 1.812rem;
`;

export default SelectField;