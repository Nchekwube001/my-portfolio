import portrait from "../assets/portrait.jpg";
import { HERO_CONTENT } from "../constants/utils";
import { motion } from "motion/react";

// montserratAlt;
// lg: p - 8;

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     x: -100,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//       staggerChidlren: 0.5,
//     },
//   },
// };
// const childVariants = {
//   hidden: {
//     opacity: 0,
//     x: -100,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

function Hero() {
  return (
    <div className="pb-4 lg:mb-36 mt-8 sticky">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{
            opacity: 0,
            x: 400,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <div className="flex justify-center  ">
            <img
              src={portrait}
              aria-label="Unekwe Francis"
              className="border border-stone-900 rounded-3xl"
              // className="w-48 h-64 object-cover rounded-xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial={{
            opacity: 0,
            x: -400,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="font-rubikMono pb-2 text-3xl tracking-tighter md:text-5xl lg:text-7xl text-white">
              Unekwe Francis
            </h2>
            <span className="font-montserratAlt bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text text-2xl tracking-tight text-transparent">
              Senior Software Developer
            </span>

            <p className="font-montserratAlt text-left text-white my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-md p-4 text-sm font-montserratAlt text-stone-600 mb-10"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
