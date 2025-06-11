import type { PropsWithChildren } from 'react';
import type { LayoutProps } from '../types/LayoutProps';

export const LevelLayout = ({
  children,
  level,
  title,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <div className="bg-gray-400 w-5xl text-gray-200 p-5">
      <h2 className="text-center text-bold mb-5 bg-gray-500 text-4xl p-5">
        Level {level}{' '}
      </h2>
      <h4 className="text-center mb-5 bg-gray-500 text-4xl p-5">{title}</h4>
      <div className="flex">{children}</div>
    </div>
  );
};
