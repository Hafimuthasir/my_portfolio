import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { github } from "../assets";

// import { Modal, Typography, Box } from '@mui/material';

import ModalExample from "./Modal";




// const ExperienceCard = ({ experience }) => {

//   const [showModal, setShowModal] = React.useState(false);

//   const handleOpenModal = () => {
//     setShowModal(true);
//     document.body.classList.add('overflow-hidden');
    
//     document.querySelector('#content').classList.add('opacity-50');
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     document.body.classList.remove('overflow-hidden');
//     document.querySelector('#content').classList.remove('opacity-50');
//   };

//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       // date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//       <br></br>
//       {/* <button onClick={() => handleOpenModal()} class="bg-purple-800 hover:bg-purple-900 text-white font-bold py-1 px-2 rounded text-sm">
//       Technologies Used
//       </button> */}
//       <ModalExample button="Technologies Used" head="Technologies Used" points={experience.technologies}/>
      
//       <div className='absolute bottom-6 right-6'>
//       <div
//         onClick={() => window.open(experience.source_code, "_blank")}
//         className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//       >
//         <img
//           src={github}
//           alt='source code'
//           className='w-1/2 h-1/2 object-contain'
//         />
//       </div>
//     </div>


//     </VerticalTimelineElement>
//   );
// };


const ExperienceCard = ({ experience }) => {

  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.classList.add('overflow-hidden');
    
    document.querySelector('#content').classList.add('opacity-50');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-hidden');
    document.querySelector('#content').classList.remove('opacity-50');
  };

  return (
    <div className="bg-black-200 rounded-xl p-3 mr-3 w-[50%] ">
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <br></br>
      {/* <button onClick={() => handleOpenModal()} class="bg-purple-800 hover:bg-purple-900 text-white font-bold py-1 px-2 rounded text-sm">
      Technologies Used
      </button> */}
      <ModalExample button="Technologies Used" head="Technologies Used" points={experience.technologies}/>
      
      <div className='absolute bottom-6 right-6'>
      <div
        onClick={() => window.open(experience.source_code, "_blank")}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={github}
          alt='source code'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>
    </div>

  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Highlighted collection of projects made for demonstration purpose only.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Some Past Endeavours.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-row'>
        {/* <VerticalTimeline> */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        {/* </VerticalTimeline> */}
      </div>


    </>
  );
};

export default SectionWrapper(Experience, "work");
