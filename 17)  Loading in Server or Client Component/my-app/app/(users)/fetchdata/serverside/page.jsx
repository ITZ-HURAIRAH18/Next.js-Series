// app/fetchdata/serverside/page.js
const Page = async (props) => {
  const searchParams = await props.searchParams;
  const userName = searchParams.name;
  const res = await fetch(`https://api.genderize.io?name=${userName}`);
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gender Prediction</h1>

      <div className="space-y-2 border p-4 rounded-lg shadow-md">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Probability:</strong> {data.probability}</p>
        <p><strong>Count:</strong> {data.count}</p>
      </div>
    </div>
  );
};

export default Page;
