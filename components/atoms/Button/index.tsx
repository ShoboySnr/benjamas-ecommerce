import styled from 'styled-components';
import styledMap from 'styled-map';


const borderWidth = styledMap('width', {
  xs: '0.187rem',
  default: '0',
});

const buttonColor = styledMap('kind', {
  secondary: 'transparent',
  default: '#000000',
});

const TextColor = styledMap('color', {
  black: '#000000',
  default: '#ffffff',
})

const paddingSize = styledMap('padding', {
  default: '0.812rem 2.437rem',
});

interface ButtonProps {
  width?: 'xs' | 'default';
  padding?: 'default';
  kind?: 'secondary' | 'default';
  color?: 'black' | 'default'
}


export const Button = styled.button.attrs(({ className }) => ({
  className: `uppercase ${className}`
}))<ButtonProps>`
  background-color: ${buttonColor};
  padding: ${paddingSize};
  border-width: ${borderWidth};
  color: ${TextColor};
  border-color: ${TextColor};
`;
