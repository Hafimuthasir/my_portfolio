import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='w-[220px] h-[150px]'>
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='bg-tertiary p-2 rounded-lg w-full h-full'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[16px]'>{name}</h3>
    </div>

    <div className='mt-2'>
      <p className='text-secondary text-[12px]'>
        {description}
        </p>
    </div>

    <div className='mt-1 flex flex-wrap gap-1'>
      {tags.map((tag) => (
        <p
          key={`${name}-${tag.name}`}
          className={`text-[10px] ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>

    <div className='absolute bottom-2 right-2'>
      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
      >
        <img
          src={github}
          alt='source code'
          className='w-1/2 h-1/2 object-contain'
        />
      </div>
    </div>
  </Tilt>
</motion.div>


  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>More work</p>
        <h2 className={`${styles.sectionHeadText}`}>Mini Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {/* Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. */}

          Eventhough these projects are small. These includes my latest works that showcases my latest
          coding standard. Link to the code repositories have added in it.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>


<br></br><br></br><br></br>


      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>Education</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          <span style={{fontSize:"1.5rem",fontWeight:"bold"}}>Brototype | May-2022</span> <br></br>
          &nbsp;Full Stack Development <br></br>
          <br></br>

          <span style={{fontSize:"1.5rem",fontWeight:"bold"}}>University of Calicut | June 2019 - Mar-2022</span> <br></br>
          &nbsp;Bachelor Of Computer Applications <br></br>
          <br></br>

          <span style={{fontSize:"1.5rem",fontWeight:"bold"}}>GHSS Pandikkad | Mar-2017-Mar-2019</span> <br></br>
          &nbsp;Higher Secondary - Science <br></br>
          <br></br>
          

          <span style={{fontSize:"1.5rem",fontWeight:"bold"}}> Pandallur Higher Secondary School | Apr-2017</span> <br></br>
          &nbsp;Higher School 

        
        </motion.p>
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
