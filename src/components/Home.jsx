import { motion } from "framer-motion";
import Profile from "./Profile"
import Projects from "./Projects"
import GithubCalender from "./GithubCalender";
function Home() {
  return (
    <div className="container mx-auto max-w-3xl pb-[100px]">
        <Profile></Profile>
        <Projects></Projects>
        <GithubCalender></GithubCalender>
    </div>
  )
}

export default Home