import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tech from "./Tech";
import TechFamiliar from "./Tech Familiar";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {/* I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life! */}
I' m a self taught full stack developer expertise in advanced web development. Proficient
working in both frontend and backend. Have a track record of delivering excellent
results under time constraints and an ability to adapt to new technologies quicker.
I possess the ability to write code quick, secure, and in a way that is easily 
understandable and maintainable.

      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <br></br><br></br><br></br>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Proficiency</p>
        <hr></hr>
        {/* <h2 className={styles.sectionHeadText}>Proficiency.</h2> */}
      </motion.div>

      <Tech sect="proficient" />

      <br></br>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Hands-On and Familiar with.</p>
        <hr></hr>
        {/* <h2 className={styles.sectionHeadText}>Proficiency.</h2> */}
      </motion.div>
      <TechFamiliar sect="familiar" />

    </>
  );
};

export default SectionWrapper(About, "about");
