import React from 'react';
import styled from 'styled-components';


const Img = styled.img.attrs(props => ({
  className: `flex items-center justify-center object-cover ${props.className}'`,
  src: props.src,
  alt: props.alt || 'avatar-img',
  title: props.title,
}))``;

interface Props {
  fallbackSrc: string;
  src: string;
  className?: string;
  alt: string;
  title?: string;
}

const Image: React.FC<Props> = ({ fallbackSrc, src, className, alt, title }) => (
  <Img src={src || fallbackSrc } className={className} title={title} alt={alt} />
)

export default Image;
