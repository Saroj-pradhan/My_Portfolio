import {motion} from "framer-motion"
function Footer() {
  return (
   
        <motion.div className="w-full pt-16  text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800"
         initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
        >
  <p>
    
     Developed by{" "}
    <span className="font-medium text-gray-800 dark:text-gray-200">
      Saroj Pradhan
    </span>
    
  </p>
  <p>© 2026.  All rights reserved.</p>


    </motion.div>
  )
}

export default Footer