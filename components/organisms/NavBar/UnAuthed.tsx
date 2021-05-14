import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { Wrapper } from './styles';
import ShoppingCart from '~atoms/Icons/ShoppingCart';
import CartsIcon from '~molecules/CartsIcon';


const NavBar: React.FC<{}> = () => {
  return (
    <>
      <Wrapper>
        <Link passHref href="/">
          <picture>
            <img
             src="/images/bejamas.png"
             alt="bejamas-logo"
             />
          </picture>
        </Link>
        <CartsIcon />
      </Wrapper>
    </>
  )
}

export default NavBar;