import { useState, useEffect } from "react";
import {Moon,Sun} from "lucide-react";

const DarkToggle = () => {
  const [dark, setDark] = useState(true);
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
        className="px-2 py-2 rounded bg-gray-50  text-black dark:bg-black   dark:text-white shadow-[0_1px_14px_rgba(0,0,0,0.2)] "
      >
       {dark ? <Moon size={20}/> : <Sun size={20}/>}
      </div>
       
    </>
  );
};

export default DarkToggle;
