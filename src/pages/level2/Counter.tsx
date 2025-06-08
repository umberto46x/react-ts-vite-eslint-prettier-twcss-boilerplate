import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-50 mx-auto bg-gray-500 m-4 text-center   ">
      <p className={`text-center p-4 text-bold text-2xl `}>Count: {count}</p>
      <button
        disabled={count === 10}
        className="btn-circle p-3 bg-gray-300 text-gray-700  w-25 m-5   hover:bg-gray-200 hover:text-gray-600  "
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        disabled={count === 0}
        className="btn-circle p-3 bg-gray-300 text-gray-700  w-25 m-5   hover:bg-gray-200 hover:text-gray-600  "
        onClick={() => setCount((prev) => prev - 1)}
      >
        Remove
      </button>
    </div>
  );
};
