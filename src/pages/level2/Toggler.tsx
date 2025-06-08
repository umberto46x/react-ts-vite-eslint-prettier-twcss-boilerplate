import { useState } from 'react';

export const Toggler = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <div className="w-50 mx-auto bg-gray-500 m-4 text-center   ">
      <p
        className={`text-center p-4 text-bold text-2xl ${isToggled ? 'text-green-500' : 'text-red-500'} `}
      >
        Toggle Status: {isToggled ? 'On' : 'Off'}
      </p>
      <button
        className="btn-circle p-3 bg-gray-300 text-gray-700  w-25 m-5   hover:bg-gray-200 hover:text-gray-600  "
        onClick={() => setIsToggled((prev) => !prev)}
      >
        Toggle
      </button>
    </div>
  );
};
