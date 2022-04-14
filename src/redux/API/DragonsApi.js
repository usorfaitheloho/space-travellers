const dragonsUrl = 'https://api.spacexdata.com/v3/dragons';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error('Can not retrieve data from the response');
  }
};

export default getData(dragonsUrl);
