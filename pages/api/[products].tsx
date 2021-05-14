import { filterProducts } from '~utils/fauna';

export default async function handler(req, res) {
  if(req.method !== 'GET') {
    return res.status(405);
  }

  const price = req.params.price;

  try {
    const products = await filterProducts(price);

    return res.status(200).json(products);

  } catch (err) {
    console.log(err);
    res.status(500).json({msg: 'Something went wrong.'})
  }
}