import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <div className="w-7xl h-full bg-gray-300 text-black flex flex-col items-center  mx-auto my-5 gap-24  p-10">
        <h1 className="text-5xl text-bold text-gray-700">
          React Beginner to Master
        </h1>

        <nav className="border-5 border-gray-500 rounded-full  ">
          <Link
            className="btn m-5 bg-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-400 hover:border-gray-400"
            to={'/'}
          >
            Home
          </Link>
          <Link
            className="btn m-5 bg-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-400 hover:border-gray-400"
            to={'/lv1'}
          >
            Level 1
          </Link>
          <Link
            className="btn m-5 bg-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-400 hover:border-gray-400"
            to={'/lv2'}
          >
            Level 2
          </Link>
          <Link
            className="btn m-5 bg-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-400 hover:border-gray-400"
            to={'/lv3'}
          >
            Level 3
          </Link>
          <Link
            className="btn m-5 bg-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-400 hover:border-gray-400"
            to={'/lv4'}
          >
            Level 4
          </Link>
          <Link
            className="btn m-5 bg-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-400 hover:border-gray-400"
            to={'/lv5'}
          >
            Level 5
          </Link>
        </nav>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default App;
