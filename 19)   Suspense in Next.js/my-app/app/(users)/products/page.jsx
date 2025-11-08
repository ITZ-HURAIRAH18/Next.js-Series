import Productlist from "./productlist";

// app/products/page.js
const Page = async ({searchParams}) => {
 const searchParam = await searchParams;
  console.log('Search Params:', searchParam); 
const cat = searchParam.category || 'No Product ID provided';
  return (
    <>
      <Productlist />
      <h1>Products Page</h1>
      <p>Selected category: {cat}</p>
    </>
  );
};

export default Page;
