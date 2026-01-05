import { useState, useEffect } from "react";
import {Moon,Sun} from "lucide-react";

const DarkToggle = () => {
  const [dark, setDark] = useState(false);
  function handelDarkTheme(){
    setDark(prev => !prev);
  }
  useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <div
        onClick={ handelDarkTheme}
        className="px-2 py-2 rounded bg-gray-100 shadow-lg text-black dark:bg-black dark:shadow-lg   dark:text-white"
      >
       {dark ? <Moon size={20}/> : <Sun size={20}/>}
      </div>
       
    </>
  );
};

export default DarkToggle;
