import { getCategories } from '~utils/fauna';

export default async function handler(req, res) {
  if(req.method !== 'GET') {
    return res.status(405);
  }

  try {
    const categories = await getCategories();

    return res.status(200).json(categories);

  } catch (err) {
    console.log(err);
    res.status(500).json({msg: 'Something went wrong.'})
  }
}