import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Projects() {
  return (
    <motion.div
      className="pt-15 "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-[#929191]">Featured</p>
      <p className="text-black dark:text-white font-semibold text-2xl pb-10 ">
        Projects
      </p>

      <div className="flex flex-wrap gap-7  justify-center ">
        <div className="w-[100%] md:w-[48%] h-[31rem] sm:h-[28rem] dark:bg-[#1d1d1d]   shadow-sm shadow-black/10 rounded-2xl overflow-hidden">
          <div className="  h-[45%] w-[100%] relative overflow-hidden inset-0  bg-[radial-gradient(circle_at_top_left,#ff5fd2,transparent_70%),radial-gradient(circle_at_bottom_right,#6a5cff,transparent_90%)]">
            <img
              className=" h-[100%] w-[100%] absolute hover:-rotate-12  "
              src="https://res.cloudinary.com/dddmddgzs/image/upload/v1756758721/Screenshot_2025-09-02_020141_ijcbw9.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="h-[55%] p-6">
            <div className="flex justify-between items-center pb-2">
              <p className="text-2xl font-semibold">Snapkart</p>

              <div className="flex gap-2 items-center">
                <Link
                  target="_blank"
                  to="https://github.com/Saroj-pradhan/ecommerce-store.git"
                >
                  <svg
                    fill="currentColor"
                    className="h-5 w-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  to="https://ecommerce-store-puce-three.vercel.app/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-globe-icon lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="pb-2 text-[#7B7B7B]">
              A full-stack MERN-based e-commerce platform with secure payments,
              Cloudinary image management, and a smooth end-to-end shopping
              experience.
            </p>
            <p className="pb-2">Technologies</p>
            <div className="flex">
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
        <div className="w-[100%] md:w-[48%] h-[31rem] sm:h-[28rem] dark:bg-[#1d1d1d]   shadow-sm shadow-black/10  rounded-2xl overflow-hidden">
          <div className="  h-[45%] w-[100%] relative overflow-hidden inset-0 bg-[radial-gradient(circle_at_top_left,#ff5fd2,transparent_70%),radial-gradient(circle_at_bottom_right,#6a5cff,transparent_90%)]">
            <img
              className=" h-[100%] w-[100%] absolute hover:-rotate-12  "
              src="https://portfolio-saroj-pradhan.vercel.app/images/mentor-alumni%20images.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="h-[55%] p-6">
            <div className="flex justify-between items-center pb-2">
              <p className="text-2xl font-semibold">M-Connect</p>

              <div className="flex gap-2 items-center">
                <Link
                  target="_blank"
                  to="https://github.com/Saroj-pradhan/mentorship-website-frontend.git"
                >
                  <svg
                    fill="currentColor"
                    className="h-5 w-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
                <Link target="_blank" to="https://m-connect-ten.vercel.app/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-globe-icon lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="pb-2 text-[#7B7B7B]">
              A scalable full-stack MERN application designed to connect
              students with alumni mentors, supporting secure authentication and
              seamless mentor–student interaction.
            </p>
            <p className="pb-2">Technologies</p>
            <div className="flex">
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
        <div className="w-[100%] md:w-[48%] h-[31rem] sm:h-[28rem] dark:bg-[#1d1d1d] shadow-sm shadow-black/10  rounded-2xl overflow-hidden">
          <div className="  h-[45%] w-[100%] relative overflow-hidden inset-0 bg-[radial-gradient(circle_at_top_left,#ff5fd2,transparent_70%),radial-gradient(circle_at_bottom_right,#6a5cff,transparent_90%)]">
            <img
              className=" h-[100%] w-[100%] absolute hover:-rotate-12 "
              src="https://portfolio-saroj-pradhan.vercel.app/images/quiz%20image.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="h-[55%] p-6">
            <div className="flex justify-between items-center pb-2">
              <p className="text-2xl font-semibold">Quiz Application</p>

              <div className="flex gap-2 items-center">
                <Link
                  target="_blank"
                  to="https://github.com/Saroj-pradhan/quiz-frontend.git"
                >
                  <svg
                    fill="currentColor"
                    className="h-5 w-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
                <Link target="_blank" to="https://ojee-mca-qustion.vercel.app/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-globe-icon lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="pb-2 text-[#7B7B7B]">
              A MERN-based quiz application enabling secure authentication,
              interactive assessments, admin-managed quizzes and a responsive
              user experience.
            </p>
            <p className="pb-2">Technologies</p>
            <div className="flex">
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
        <div className="w-[100%] md:w-[48%] h-[31rem] sm:h-[28rem] dark:bg-[#1d1d1d]   shadow-sm shadow-black/10 rounded-2xl overflow-hidden">
          <div className="  h-[45%] w-[100%] relative overflow-hidden inset-0 bg-[radial-gradient(circle_at_top_left,#ff5fd2,transparent_70%),radial-gradient(circle_at_bottom_right,#6a5cff,transparent_90%)]">
            <img
              className=" h-[100%] w-[100%] absolute hover:-rotate-12 "
              src="https://res.cloudinary.com/dddmddgzs/image/upload/v1756759267/Screenshot_2025-09-02_021047_ybbeim.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="h-[55%] p-6">
            <div className="flex justify-between items-center pb-2">
              <p className="text-2xl font-semibold">Stock Dashboard</p>

              <div className="flex gap-2 items-center">
                <Link
                  target="_blank"
                  to="https://github.com/Saroj-pradhan/stock-market-dadshboard.git"
                >
                  <svg
                    fill="currentColor"
                    className="h-5 w-5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
                <Link
                  target="_blank"
                  to="https://stock-market-dadshboard.vercel.app/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-globe-icon lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="pb-2 text-[#7B7B7B]">
              A stock market dashboard showcasing manually curated stock data
              with interactive visualizations and trend analysis using Chart.js.
            </p>
            <p className="pb-2">Technologies</p>
            <div className="flex">
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
      </div>
    </motion.div>
  );
}

export default Projects;
