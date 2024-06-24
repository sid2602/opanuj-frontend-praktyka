import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const requestDate = new Date();
  return {
    ...config,
    data: {
      requestDate,
    },
  };
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  const requestDate = new Date(JSON.parse(response.config.data).requestDate);
  const currDate = new Date();

  console.log(Math.abs(requestDate - currDate));

  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
