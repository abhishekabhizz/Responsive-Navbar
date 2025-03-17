import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [shownavbar, setshownavbar] = useState(false);

  const toggleNavbar = () => {
    setshownavbar(prevState => !prevState);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-300 via bg-yellow-300  ">
      <h1 className="text-2xl font-bold flex items-center  px-3 text-black">logo</h1>
      <div className='flex gap-3 px-24'>
        <ul className={`lg:static flex flex-col lg:flex-row items-center gap-6 font-semibold absolute duration-500 ${shownavbar? "right-[100px] top-18":"left-[-100px]"} `}>
        
        <li className="hover:text-green-700">Home</li>
          <li className="hover:text-green-700">About</li>
          <li className="hover:text-green-700">Contact</li>
          <li className="hover:text-green-700">Signup</li>
        
        </ul>
        <div onClick={toggleNavbar} className="lg:hidden text-black cursor-pointer">
          {shownavbar ? <CloseIcon /> : <MenuIcon />}
          </div>
      </div>
    </div>
  );
}

export default App;