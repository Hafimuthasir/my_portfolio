import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { familiar } from "../constants";

const Tech = () => {

  return (
<div className="flex flex-wrap justify-center gap-6 sm:gap-10">

<>
  {technologies.map((technology) => (
    <div className="w-24 sm:w-28 flex flex-col items-center shadow-md" key={technology.name}>
      <img src={technology.icon} className="h-16 sm:h-20 object-contain mb-2 " alt="Technology Icon"/>
      <h3 className="text-sm sm:text-base font-medium text-center">{technology.name}</h3>
    </div>
  ))}
</>
</div>

  );
};

export default SectionWrapper(Tech, "");
