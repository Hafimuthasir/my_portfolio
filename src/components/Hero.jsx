import { motion } from "framer-motion";

import { styles } from "../styles";
import FancyText from '@carefully-coded/react-text-gradient';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`sm:ml-[-4px] absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <br></br><br></br>
          <h1 className={`${styles.heroHeadText} text-white mb-5`}>
            Hi, I'm
          </h1>
          <FancyText
          className="font-bold lg:text-[80px] sm:text-[60px] sm:max-w-[50%] xs:text-[50px] text-[40px] lg:leading-[98px] mt-[-10px]"
      gradient={{ from: '#F858E0', to: '#77156C', type: 'linear' }}
      animateTo={{ from: '#6DEDD0', to: '#7AE23A' }}
      animateDuration={2000}
    >
      Muthasir
    </FancyText>
             {/* <span className='bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text text-gradient' >Muthasir</span> */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* I develop faster, secure and beautiful Frontend, Backend<br className='sm:block hidden' />
            and Full Stack web applications */}
            {/* I build fast, secure, and attractive Full-stack web applications. My focus is on delivering high-quality code that meets client 
           needs and providing an optimal user experience through intuitive design. */}
           {/* I build optimized, secure and attractive web applications using Python, Django and React. */}
           I craft visually captivating and robust web applications that prioritize speed, security, and intuitive user experience, coupled with expertise in deployment and DevOps practices.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              
              // className='w-3 h-3 rounded-full bg-secondary mb-1'
              className='transform rotate-180'
            >
<ExpandCircleDownIcon style={{ opacity: 10 }}/>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
