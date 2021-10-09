import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'

function Nav() {

    const svgVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { scale: 1.1, duration: 1.5, delay: 0.2 }
        },
        hover: {
            scale: 1.1,
            textShadow: "0px 10px -14px 14px rgb(255,255,255)",
            transition: {
              duration: 0.6,
              yoyo: Infinity
            }
        } 
        
}

const containerVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh'
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.0, type: 'spring'},
      y: 0

    },
  }

    return (
        <div className="nav">
            <motion.div className="nav_links"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <ul>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/projects"><li>PROJECTS</li></Link>
                    
                </ul>
            </motion.div>
            <div className ="nav_logo">
                <motion.svg width="103" height="46" viewBox="0 0 103 46" fill="none" xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                >
                <path d="M30.9674 24.0534L10.8512 3.67853L0 14.392L20.1163 34.7668L30.9674 24.0534Z" fill="#E34276"/>
                <path d="M96.4522 39.2484C92.2292 43.5906 86.6152 45.9821 80.6438 45.9821C74.6724 45.9821 69.0584 43.5906 64.8361 39.249C64.8361 39.2484 43.9737 17.7841 43.9737 17.7841C41.1813 14.913 36.6384 14.913 33.8466 17.7841C32.4939 19.1745 31.7493 21.0241 31.7493 22.9911C31.7493 24.958 32.4939 26.8077 33.8466 28.1981C35.2428 29.634 37.0763 30.3516 38.9098 30.3516C40.7433 30.3516 42.5775 29.6333 43.9731 28.1981L45.4537 26.6754L56.1962 37.7284L54.7182 39.2484C50.4959 43.5906 44.8819 45.9821 38.9098 45.9821C32.9384 45.9821 27.3238 43.5906 23.1015 39.2484C18.8791 34.9054 16.5536 29.1321 16.5536 22.9911C16.5536 16.8501 18.8791 11.076 23.1015 6.7338C27.3238 2.39156 32.9384 7.62939e-06 38.9098 7.62939e-06C44.8813 7.62939e-06 50.4952 2.39088 54.7175 6.73312L70.518 22.9897L75.5654 28.1832L75.5799 28.1981C78.3724 31.0692 82.9153 31.0692 85.7071 28.1981C87.0598 26.8077 87.8044 24.958 87.8044 22.9911C87.8044 21.0241 87.0598 19.1745 85.7071 17.7841C82.9153 14.913 78.3724 14.913 75.5799 17.7841L74.0993 19.3068L63.3568 8.25378L64.8355 6.7338C69.0578 2.39156 74.6717 7.62939e-06 80.6432 7.62939e-06C86.6146 7.62939e-06 92.2292 2.39156 96.4515 6.7338C100.675 11.076 103 16.8501 103 22.9911C103 29.1321 100.675 34.9054 96.4522 39.2484Z" fill="#E34276"/>
                </motion.svg>
            </div>
            <motion.div className="nav_icons"
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                    <a href="https://www.linkedin.com/in/joesmith87" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://instagram.com/joeycrushed" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://github.com/joeycrushed" target="_blank" rel="noreferrer"><FaGithub /></a> 
            </motion.div>
    </div>
    )
}

export default Nav
