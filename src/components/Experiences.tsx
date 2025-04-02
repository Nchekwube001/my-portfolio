import React from "react";
import { EXPERIENCES } from "../constants/utils";

function Experiences() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl font-rubikMono text-white">
        Experience
      </h2>
      <div>
        {EXPERIENCES.map(({ company, icon, role, year }) => (
          <div key={company} className="flex flex-wrap  mb-8 justify-center">
            <div className="w-full lg:w-1/4 justify-center items-center flex ">
              <img
                className="w-64 h-64 mb-6 rounded"
                src={icon}
                alt={company}
              />
            </div>
            <div className="w-full max-w-2xl lg:w-3/4 lg:pl-8 justify-center items-center lg:items-start flex flex-col">
              <h3 className="font-rubikMono text-2xl mb-2 text-white">
                {role} -{" "}
                <span className="font-montserratAlt text-stone-400">
                  {company}
                </span>
              </h3>
              <p className="font-montserratAlt mb-4 text-stone-400">{year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
