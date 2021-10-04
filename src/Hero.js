import React from 'react'
import './Hero.css'
import profile_pic from './assets/profile.jpeg'
import { motion } from 'framer-motion'

function Hero() {

    const imageVariants = {
        hidden: {
            opacity: 0,
            x: '-100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2.5, type: 'spring'}
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
        <div className="hero_container">
            <motion.div className="hero_image" 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                >
                <img src={profile_pic} alt="profile" />
            </motion.div>
            <motion.div className="hero_info"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h3 variants={childVariants}>WEB DEVELOPER</motion.h3>
                <motion.p variants={childVariants}>I’m Joe. I’m a web developer originally from Yorkshire. After moving to London, 
                I starting working in retail and worked my up to management. After many years in the 
                retail industry, I decided to have a career change and retrain in web development. I’ve 
                always had a keen interest in tech and design so fiigured it’d be a perfect fit. 
                So here I am!</motion.p>
                <motion.div variants={childVariants} className="hero_contact">
                    <button>Contact</button>
                    <button>Download My CV</button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero
