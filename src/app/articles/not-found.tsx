import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-gray-600">ページが見つかりませんでした。</p>
      </div>
    </div>
  );
};

export default NotFound;
