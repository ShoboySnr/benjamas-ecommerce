import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '~templates/Home'
import { getCategories, getProducts } from '~utils/fauna';
import { NextPageContext } from 'next';
import { Category, Product } from '~types/index';

const Home = ({ categories, products }: { categories?: Category[], products?: Product[]}) => {
  return (
    <HomePage categories={categories} products={products} />
  )
}


export const getStaticProps = async (ctx: NextPageContext) => {
  try {
    const categories = await getCategories();
    const products = await getProducts();

    return {
      props: { categories, products },
    };

  } catch (err) {
    return { props: {} };
  }
}

export default Home;