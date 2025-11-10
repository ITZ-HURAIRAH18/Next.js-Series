"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation'; // <-- note the curly braces

function Productlist() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'No category selected';

  return (
    <div>
      <h2>Product List</h2>
      <p>Selected category: {category}</p>
    </div>
  );
}

export default Productlist;
