'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name") || "Aftab";

  const [genderData, setGenderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.genderize.io?name=${userName}`);
      const data = await res.json();
      setGenderData(data);
    };
    fetchData();
  }, [userName]);

  if (!genderData) return <p className="p-6 text-gray-600">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Gender Prediction</h1>

      <div className="space-y-2 border p-4 rounded-lg shadow-md">
        <p><strong>Name:</strong> {genderData.name}</p>
        <p><strong>Gender:</strong> {genderData.gender}</p>
        <p><strong>Probability:</strong> {genderData.probability}</p>
        <p><strong>Count:</strong> {genderData.count}</p>
      </div>
    </div>
  );
};

export default Page;
