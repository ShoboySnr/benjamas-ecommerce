import React from 'react';
import Link from 'next/link';
import Image from '~atoms/Image';
import { Button } from '~atoms/Button';
import { Border } from '~atoms/Border';
import { PhotoOfDayWrapper, LogoTextWrapper, PhotoOfDayAboutWrapper, AboutWrapper, Wrapper } from './style';
import PeopleAlsoBuy from '~organisms/PeopleAlsoBuy';


const PhotoOfDay: React.FC<{}> =  () => {
  return (
    <Wrapper>
    <PhotoOfDayWrapper>
      <LogoTextWrapper>
        <Link passHref href="/">
          <h2>Samurai King Resting</h2>
        </Link>
        <Button>Add to cart</Button>
      </LogoTextWrapper>
      <Image fallbackSrc="" src="images/photo-of-day.png" alt="photo-of-the-day" />
      <div className="text-wrapper">
        <p>Photo of the day</p>
      </div>
  </PhotoOfDayWrapper>
      <AboutWrapper>
        <PhotoOfDayAboutWrapper className="max-width-text">
        <h1>About the Samurai King Resting</h1>
        <h3>Pets</h3>
        <p>
        So how did the classical Latin become so incoherent? According to McClintock, 
        a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to 
        provide placeholder text to mockup various fonts for a type specimen book.So 
        how did the classical Latin become so incoherent? According to McClintock, a 15th 
        century typesetter likely scrambled part of Cicero's De Finibus in order to provide 
        placeholder <br /><br /> text to mockup various fonts for a type specimen book.So how did the 
        classical Latin become so incoherent? According to McClintock.
        </p>
      </PhotoOfDayAboutWrapper>
      <PeopleAlsoBuy />
      </AboutWrapper>
    </Wrapper>
  );
}

export default PhotoOfDay;