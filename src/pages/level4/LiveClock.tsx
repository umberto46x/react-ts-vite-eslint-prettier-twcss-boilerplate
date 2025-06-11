import { useEffect, useState } from 'react';

export const LiveClock = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="w-75 mx-auto bg-gray-500 m-4 text-center pb-10    ">
        <h4 className="text-center p-4 text-bold text-2xl">Live Clock</h4>
        <p className="text-5xl text-center  mt-5 mb-10 ">Time </p>
        <span className="text-5xl text-center border-5 rounded-xl p-1 animate-pulse    ">
          {time}{' '}
        </span>
      </div>
    </>
  );
};
