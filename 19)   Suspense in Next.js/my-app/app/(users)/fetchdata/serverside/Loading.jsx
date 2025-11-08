// app/fetchdata/serverside/loading.jsx
import React from "react";

 function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-gray-300 animate-pulse">
          Fetching data...
        </p>
      </div>
    </div>
  );
}
export default Loading;
