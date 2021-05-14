import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';

const request = async (path: string, init?: RequestInit, baseUrl = `${process.env.SERVER_URI}`) => {
  const url = baseUrl + path;
  const token = Cookies.get('token');
  let authHeader = {};

  if (token) {
    authHeader = {
      Authorization: `Bearer ${token}`,
    };
  }

  let config: RequestInit = {
    headers: authHeader,
  };

  if (init) {
    config = {
      ...init,
      headers: {
        ...init.headers,
        ...authHeader,
      },
    };
  }

  const res = await fetch(url, config);

  if (res.status >= 500) {
    throw new Error('Server Error!');
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

export default request;