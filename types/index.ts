import { Dispatch, SetStateAction } from 'react';


export interface Home {
  photoOfDay: string;
  aboutSamurai: [
    title: string,
    subTitle: string,
    description: string,
  ]
}

export interface Image {
  src: string;
  alt: string;
}

export interface Product {
  id: number,
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestSeller: boolean;
  featured: boolean;
  details: string;
}

export interface Category {
  id: number,
  name: string;
  slug: string;
}

export interface Categories {
  category: Category[];
}

export interface Price {
  name: string;
  slug: string;
}

export interface Prices {
  price: Price[];
}