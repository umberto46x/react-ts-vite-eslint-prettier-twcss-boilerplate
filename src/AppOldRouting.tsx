import { Link, Route, Routes } from 'react-router-dom';
import { Level1 } from './pages/level1/Level1';
import { Level2 } from './pages/level2/Level2';
import { Level3 } from './pages/level3/Level3';
import { Level4 } from './pages/level4/Level4';
import { Level5 } from './pages/level5/Level5';
import { Home } from './pages/Home';

 function App() {
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lv1" element={<Level1 />} />
          <Route path="/lv2" element={<Level2 />} />
          <Route path="/lv3" element={<Level3 />} />
          <Route path="/lv4" element={<Level4 />} />
          <Route path="/lv5" element={<Level5 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
