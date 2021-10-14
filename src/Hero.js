import React, { useState, useEffect }from 'react'
import './Hero.css'
import profile_pic from './assets/profile.jpeg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import cv from './assets/JosephSmithCV.pdf'

function Hero() {

    const [copySuccessMessage, setCopySuccessMessage] = useState('')
    const [instructions, setInstructions] = useState('')
    const email = 'josephandrewsmith87@gmail.com'
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCopySuccessMessage('')
      }, 3000)
      return () => clearTimeout(timer)
    }, [copySuccessMessage])
  
    function copyEmail() {
      navigator.clipboard.writeText(email)
      setCopySuccessMessage(`${email} copied to clipboard`)
      setInstructions('')
    }
  
    function showInstruction() {
      if (copySuccessMessage) {
        return
      }
      setInstructions(`Copy email to clipboard`)
    }
  
    function hideInstruction() {
      setInstructions('')
    }
  

    const imageVariants = {
        hidden: {
            opacity: 0,
            x: '-100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2.5, type: 'spring'}
        },
        exit: {
          opacity: 0,
        }
    }

    const containerVariants = {
        hidden: {
          opacity: 0,
          x: '-100vw'
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { 
            type: 'spring',
            delay: 0.8,
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.8
          }
        },
        exit:{
          opacity: 0,
          transition: { ease: 'easeInOut'}
      }
    }

const childVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

    return (
      <>  
        <div className="hero_container">
            <motion.div className="hero_image" 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                >
                <div>
                <img src={profile_pic} alt="profile" />
                </div>
            </motion.div>

            <motion.div className="hero_info"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.h3 variants={childVariants}>WEB DEVELOPER</motion.h3>
                <motion.p variants={childVariants}>Hi, I’m Joe. I'm a newly trained web developer after recently completing Full Stack 
                Web Development at Le Wagon, London. Since graduating, I've been learning the React library and building new projects. I'm currently 
                looking for my first junior role in tech. Check out my CV below!        
                </motion.p>
                <motion.div variants={childVariants} className="hero_contact">
                  
                    <button className="contact_button"
                      onClick={copyEmail}
                      onMouseOver={showInstruction}
                      onMouseOut={hideInstruction}
                    >Contact</button>
                    
                    <Link to={cv} target="_blank" download><button className="download_button">Download My CV</button></Link>
                    
                </motion.div>
                <div className="instructions">{copySuccessMessage} {instructions}</div>
            </motion.div>
            
          </div>
      
        </>
    )
}

export default Hero
