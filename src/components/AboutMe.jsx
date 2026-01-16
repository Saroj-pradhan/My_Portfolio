import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function AboutMe() {
  return (
    <motion.div
      className="pt-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-[#929191]">About</p>
      <p className="text-black dark:text-white font-semibold text-2xl pb-10 ">
        Me
      </p>

      <div className=" sm:flex  gap-8">
        <img
          className=" w-56 h-56  hover:scale-110 mb-7"
          src="https://res.cloudinary.com/dddmddgzs/image/upload/v1767606273/WhatsApp_Image_2026-01-03_at_6.44.45_PM_dzaeh9.jpg"
          alt="profile"
        />
        <div>
          <p className="pt-2 text-2xl font-semibold">Saroj Pradhan</p>
          <p className="pt-3 text-[#929191]">
            I’m a full-stack web developer specializing in the MERN stack,
            passionate about building clean, responsive, and practical web
            applications that solve real-world problems.
          </p>
          <p className="pt-3 text-[#929191] font-bold">Skills</p>
          <div className="flex pt-3">
            <Link
              to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="px-3 py-0.5   rounded-md "
            >
              {" "}
              <img
                src="/js-brands-solid.svg"
                alt="js logo"
                height={24}
                width={24}
              />
            </Link>

            <Link
              to="https://react.dev/learn"
              className="px-3 py-0.5   rounded-md"
            >
              <img
                src="/react-brands-solid.svg"
                alt="js logo"
                height={24}
                width={24}
              />
            </Link>

            <Link
              to="https://www.mongodb.com/docs/"
              className="px-3 py-0.5   rounded-md"
            >
              <img
                src="/database-solid.svg"
                alt="mongodb logo"
                height={23}
                width={23}
              />
            </Link>

            <Link
              to="https://nodejs.org/docs/latest/api/"
              className="px-3 py-0.5  rounded-md"
            >
              <img
                src="/nodejs-icon.svg"
                alt="nodejs logo"
                height={24}
                width={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
