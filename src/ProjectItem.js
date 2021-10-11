import React from 'react'
import './ProjectItem.css'
import { motion } from 'framer-motion'

function ProjectItem(props) {

    const childVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
            delay: 1,
          opacity: 1
        }
      }

    return (
    <motion.div className="project_item"
    variants={childVariants}>
        <div className="project_image">
            <img className="img" src={props.image} alt="" />
        </div>
        <div className="project_info">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                
            <a href={props.url} rel="noreferrer" target="_blank">Live Demo</a>
            <a href={props.github} rel="noreferrer" target="_blank">Github Repo</a>
            <div className="pill_container">
                {props.tech.map((tech) => 
                    <p className="pill">{tech}</p>
                )}
            </div>
        </div>
    </motion.div>
    )
}

export default ProjectItem