import React from 'react';
import HEAD from 'next/head';
import { Wrapper, BackDrop } from '~atoms/BackDrop';
import NavBar from '~organisms/NavBar/';
import { AboutWrapper } from './style';
import { Border } from '~atoms/Border';
import PhotoOfDay from '~organisms/PhotoOfDay';
import HomeProducts from '~organisms/HomeProducts';
import { Category, Product } from '~types/index';
import Loader from '~atoms/Icons/Loader';


const HomePage = ({ categories, products }: { categories?: Category[], products?: Product[] }) => {
  return (
    <>
      <HEAD>
        <title>Samurai King Resting</title>
      </HEAD>
      <Wrapper>
          <BackDrop>
          <NavBar />
            <Border />
            <AboutWrapper>
              <PhotoOfDay />
            </AboutWrapper>
            <Border />
              <HomeProducts categories={categories} products={products}/>
        </BackDrop>
      </Wrapper>
    </>
  )
} 

export default HomePage;