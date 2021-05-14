import useSWR from 'swr';
import { Category, Product } from '~types/index';

export default function useHome(categoriesItem?: Category[], productsItem?: Product[]) {

  const { data: categories, isValidating: loading } = useSWR<Category[]>('/api/categories');

  const { data: products } = useSWR<Product[]>('/api/products');

  return {
    categories,
    products,
    loading
  };
}