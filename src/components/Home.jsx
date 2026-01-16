import { motion } from "framer-motion";
import Profile from "./Profile"
import Projects from "./Projects"
import GithubCalender from "./GithubCalender";
import AboutMe from "./AboutMe";
import Quotes from "./Quotes";
import Footer from "./Footer";
function Home() {
  return (
    <div className="container mx-auto max-w-3xl pb-[55px]">
        <Profile></Profile>
        <Projects></Projects>
        <GithubCalender></GithubCalender>
        <AboutMe></AboutMe>
        <Quotes></Quotes>
        <Footer></Footer>
    </div>
  )
}

export default Home