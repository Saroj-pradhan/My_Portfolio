import { motion } from "framer-motion";
import Profile from "./Profile"
import Projects from "./Projects"
function Home() {
  return (
    <div className="container mx-auto max-w-3xl pb-[100px]">
        <Profile></Profile>
        {/* <Profile></Profile> */}
        <Projects></Projects>
    </div>
  )
}

export default Home