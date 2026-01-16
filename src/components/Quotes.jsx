import {motion} from "framer-motion"
import {useState,useEffect} from "react"
function Quotes() {
    const quoteArr = [
  {
    text: "You have the right to work, but never to the fruit of work.",
    author: "Bhagavad Gita",
  },
  {
    text: "Perform your duty without attachment to results.",
    author: "Bhagavad Gita",
  },
  {
    text: "A person is made by their beliefs. As they believe, so they become.",
    author: "Bhagavad Gita",
  },
  {
    text: "Change is the law of the universe. You can be a millionaire or a pauper in an instant.",
    author: "Bhagavad Gita",
  },
  {
    text: "The soul is neither born, nor does it ever die.",
    author: "Bhagavad Gita",
  },
  {
    text: "One who controls the mind is peaceful in happiness and distress.",
    author: "Bhagavad Gita",
  },
  {
    text: "There is nothing lost or wasted in following one’s own duty.",
    author: "Bhagavad Gita",
  },
  {
    text: "The mind acts like an enemy for those who do not control it.",
    author: "Bhagavad Gita",
  },
  {
    text: "Set thy heart upon thy work, but never on its reward.",
    author: "Bhagavad Gita",
  },
  {
    text: "A man is made by his beliefs. As he believes, so he is.",
    author: "Bhagavad Gita",
  },
];
 const[quote,setquote] = useState({text:"",author:""});
   useEffect(()=>{
    setquote(randomQuotes);
   },[]);
   
   function randomQuotes(){
    return quoteArr[Math.floor(Math.random() * quoteArr.length)];
   }
  return (
    <motion.div className="mt-14 h-36 shadow-sm dark:shadow-gray-300/20 shadow-black/25 rounded-2xl  p-4 flex flex-col justify-center ">
        <p className="text-[#2a2a2bbd] font-light dark:text-white text-lg">"{quote.text}"</p>
        <p className="text-end ">— {quote.author}</p>
    </motion.div>
  )
}

export default Quotes