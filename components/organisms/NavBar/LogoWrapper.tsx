import React from 'react';
import Link from 'next/link';
import { LogoTextWrapper } from './styles';
import { Button } from '~atoms/Button';
import { Border } from '~atoms/Border';


const LogoWrapper: React.FC<{}> = () => {
  return (
    <>
      <Border />
      <LogoTextWrapper>
        <Link passHref href="/">
          <h2>Samurai King Resting</h2>
        </Link>
        <Button>Add to cart</Button>
      </LogoTextWrapper>
    </>
  )
}

export default LogoWrapper;