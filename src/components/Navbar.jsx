import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { saveAs } from 'file-saver';
import { Button } from "@mui/material";
// import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import { motion } from "framer-motion";
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const downloadCV = () => {
    console.log('hellll');
    const cvUrl = "../../public/cv.pdf";
    saveAs(cvUrl, 'Muthasir.pdf');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };



    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
        
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      
      
      {/* <Button
      sx={{ fontFamily: "inherit", textTransform: "none"}} 
      variant="contained" 
      size="small"
      color="secondary">
      <ArticleIcon sx={{ fontSize: "inherit" }} /> Resume
        </Button> */}
<div>
{/* <a href="https://drive.google.com/file/d/1rYVzdRomQKNVgv4PCZtrN0_IxR1_9-3y/view?usp=share_link" download target="_blank"> */}
<a href="https://drive.google.com/file/d/15XTYbJM71ieNHKDSsppD308c2qYmtUf2/view?usp=drive_link" download target="_blank">

  <Button
    sx={{ fontFamily: "inherit", textTransform: "none"}}
    variant="contained"
    size="small"
    color="secondary"
  >
    <ArticleIcon sx={{ fontSize: "inherit" }} /> Resume
  </Button>
</a>
&nbsp;
<a href="https://github.com/Hafimuthasir" target="_blank">
  <Button
    sx={{ fontFamily: "inherit", textTransform: "none",background:"#282837"}}
    // className="sm:h-20"
    variant="contained"
    size="small"
    // color="info"
  >
    <GitHubIcon sx={{fontSize:"1.4rem"}} className="text-sm sm:text-sm"/> <span className="hidden sm:inline-block">Github</span>
  </Button>
</a>

{/* &nbsp;
<a href="https://drive.google.com/file/d/1rYVzdRomQKNVgv4PCZtrN0_IxR1_9-3y/view?usp=share_link" download target="_blank">
  <Button
    sx={{ fontFamily: "inherit", textTransform: "none"}}
    variant="contained"
    size="small"
    color="primary"
  >
    <GitHubIcon sx={{ fontSize: "inherit" }} /> Linkedin
  </Button>
</a> */}

</div>

        {/* <p>&nbsp;</p> */}

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
{
  scrolled?
<motion.p         
       initial={{ opacity: 0, scale: 0 }} // Set initial position and opacity
       animate={{ opacity: 1, scale: 1 }} // Set animation target position and opacity
       transition={{
         duration: 1, // Set animation duration to 1 second
         type: "spring",
         stiffness: 260,
         damping: 20,
       }}
 className='ml-5 lg:ml-10 text-white text-[28px] font-bold cursor-pointer flex '>
           Muthasir
          </motion.p>:""
}
          

        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />



          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>

              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
      </div>
    </motion.nav>
  );
};

export default Navbar;
