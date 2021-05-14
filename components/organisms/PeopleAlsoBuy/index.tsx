import React from 'react';
import Image from '~atoms/Image';
import { DetailsWrapper, ImageWrapper, PeopleAlsoBuyWrapper } from './style';


const PeopleAlsoBuy: React.FC<{className?: string}> = ({ className }) => {
  return (
    <PeopleAlsoBuyWrapper className={className}>
      <h1>People also buy</h1>
      <ImageWrapper>
        <Image src="images/people-also-buy-1.png" fallbackSrc="" alt="people-also-buy" />
        <Image src="images/people-also-buy-2.png" fallbackSrc="" alt="people-also-buy" />
        <Image src="images/people-also-buy-3.png" fallbackSrc="" alt="people-also-buy" />
      </ImageWrapper>
      <DetailsWrapper>
        <h3>Details</h3>
        <p>Size: 1020 x 1020 pixel</p>
        <p>Size: 15 mb</p>
      </DetailsWrapper>
    </PeopleAlsoBuyWrapper>
  );
}

export default PeopleAlsoBuy;