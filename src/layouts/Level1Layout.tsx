import type { PropsWithChildren } from 'react';

export const Level1Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gray-400 w-5xl text-gray-200 p-5">
      <h2 className="text-center text-bold mb-5 bg-gray-500">Level 1</h2>
      <h4 className="text-center mb-5 bg-gray-500">
        JSX/TSX , Components, Props
      </h4>
      {children}
    </div>
  );
};
