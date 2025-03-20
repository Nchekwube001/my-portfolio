import { AnimatePresence, motion } from "motion/react";
import portrait from "../assets/portrait.jpg";
function PhotoBox() {
  return (
    <AnimatePresence>
      <motion.div
        className="p-6 bg-white rounded-2xl items-center  justify-center overflow-hidden relative"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute -top-10 -left-20 w-48 h-48  rounded-full bg-transparent z-10">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {[...Array(17)].map((_, i) => {
              const angle = (i / 17) * 360;
              return (
                <div
                  key={i}
                  className="absolute w-1 h-4 bg-orange-300 rounded-lg"
                  style={{
                    transform: `rotate(${angle}deg) translate(70px)`,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <img src={portrait} className="w-48 h-64 object-cover rounded-xl" />
        <h1 className="font-rubikMono font-semibold text-2xl text-center pt-4">
          UNEKWE
        </h1>
        <h1 className="font-rubikMono font-semibold text-2xl text-center">
          FRANCIS
        </h1>
        <h1 className="font-montserratAlt text-center pt-4">
          ENGINEER & CREATIVE
        </h1>
      </motion.div>
    </AnimatePresence>
  );
}

export default PhotoBox;
