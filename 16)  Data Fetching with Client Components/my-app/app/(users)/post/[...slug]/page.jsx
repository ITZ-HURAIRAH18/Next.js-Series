const Page = async (props) => {
  const { slug } = await props.params;
console.log("Slug params:", slug);
  return (
    <>
      <h1>Post: {slug.join("/")}</h1>
    </>
  );
};

export default Page;