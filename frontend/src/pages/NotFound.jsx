import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;