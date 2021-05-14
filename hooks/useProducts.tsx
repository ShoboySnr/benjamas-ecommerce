import useSWR from 'swr';
import Router, { useRouter } from 'next/router';
import { Category, Product } from '~types/index';

export default function useProducts(category?: Category[], price?: string, order?: string) {
  const categories = category.join(',')
  const { data: products, isValidating: loading } = useSWR<Category[]>(`/api/products?price=${price}&order=${order}&category=${categories}`);

  return {
    products,
    loading
  };
}