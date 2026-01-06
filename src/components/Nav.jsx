import {Link} from "react-router-dom";
import DarkToggle from "../DarkToggle"
const Nav = ()=>{
    return(
        <div className="container mx-auto max-w-3xl  flex justify-between items-end  pt-1.5 sticky top-0 z-50 backdrop-blur-sm">
            <div className="flex gap-3 items-end">
                <img src="https://res.cloudinary.com/dddmddgzs/image/upload/v1767606273/WhatsApp_Image_2026-01-03_at_6.44.45_PM_dzaeh9.jpg" alt="profile img" width={"50px"} height={"50px"}/>
                <Link className="none" to="/work">Work</Link>
                <Link className="none" to="/blogs">Blogs</Link>
                <Link className="none" to="/projects">Projects</Link>
            </div>
            <div>
               <DarkToggle></DarkToggle>
            </div>
             
        </div>
    )
}
export default Nav;