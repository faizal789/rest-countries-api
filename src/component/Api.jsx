const fetchData = async () => {
  try {
    const resp = await fetch( "https://restcountries.com/v3.1/all?limit=10");
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

export default fetchData;