import faunadb from 'faunadb';
import { Category, Product } from '~types/index';

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY,
});

const q = faunadb.query;

export const getCategories = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('categories'))
      ),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )  
  );

  const categories = data.map(category => {
    category.data.id = category.ref.id;
    category = category.data;
    delete category.ref;
    delete category.data;
    return category;
  });

  return categories;
};

export const getProducts = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('products'))
      ),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )  
  );

  const products = data.map(product => {
    product.data.id = product.ref.id;
    product = product.data;
    delete product.ref;
    delete product.data;
    return product;
  });

  return products;
}

export const getProductsByCategoryName = async (category: string) => {
  
}


export const filterProducts = async (price?: string, categories?: Category[], order?: string) => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('products'))
      ),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )  
  );

  const products = data.map(product => {
    if(product.data.price < 20) {
      product.data.id = product.ref.id;
      product = product.data;
      delete product.ref;
      delete product.data;
      return product;
    }
  });

  return products;
}