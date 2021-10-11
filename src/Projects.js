import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'
import netflix from './assets/netflix.gif'
import nfl from './assets/nfl.gif'
import pawpals from './assets/pawpals.gif'
import plantsapp from './assets/plantsapp.gif'
import pizzajoint from './assets/pizzajoint.gif'
import dojoblog from './assets/dojoblog.gif'
import { motion } from 'framer-motion'


function Projects() {

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "400vh"
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween',
      duration: 1,
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.8}
    },
    exit: {
      opacity: 0,
      y: "400vh",
      transition: { type: 'tween',
      delay: 0.2,
      duration: 1,
      stiffness: 100,
    }
  }
}


    return (      
        <>
        <div className="projects">
            <motion.div className="projects_container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                      <ProjectItem
                        title="NFL Statistic Tracker" 
                        image={nfl} 
                        description="This is an ongoing project that takes the data from an api and uses dynamic routing to create information based on each team. I'm hoping
                        to extend this project by finding an API with more data, so I can implement more statistics and hopefully have live statistics whilst a game is on-going."
                        url="https://laughing-agnesi-ce957e.netlify.app/"
                        github="https://github.com/joeycrushed/nfl-stats-tracker"
                        tech={["REACT.JS", "API", "DYNAMIC ROUTING", "REACT ROUTER", "JSX", "REACT HOOKS", "USESTATE", "USEEFFECT", "USEHISTORY", "CSS", "HTML"]}
                    />
                      <ProjectItem 
                        title="PawPals" 
                        image={pawpals} 
                        description="This is a web application built with Ruby on rails with the purpose of allowing the user to find other dogs in their area 
                        with similar temperaments. A user is able to search through the dogs, create meet ups, add favourites and chat with other owners"
                        url="https://paw-pals-v2.herokuapp.com/"
                        github="https://github.com/joeycrushed/Paw-Pals-v2"
                        tech={["RUBY", "RUBY ON RAILS", "JAVASCRIPT", "POSTGRESQL", "SCSS", "MAPBOX", "SIMPLEFORM"]}
                    />

                    <ProjectItem 
                        title="Netflix Clone" 
                        image={netflix} 
                        description="Netflix clone built with React.js. A user can sign up, browse through movies and also purchase a subscription through stripe
                        if they want the worst netflix ever with no content"
                        url="https://netflix-clone-7ca63.web.app/"
                        github="https://github.com/joeycrushed/netflix-react"
                        tech={["REACT.JS", "STRIPE", "FIREBASE", "JSX", "CSS", "HTML"]}
                    />
                      <ProjectItem 
                        title="Plants App" 
                        image={plantsapp} 
                        description="This web application is a market place where a user can upload their plant collection and rent them out for press events or for propagation. Tinder 
                        for plants."
                        url="https://plantsapp1.herokuapp.com/"
                        github="https://github.com/joeycrushed/Plants-App"
                        tech={["RUBY", "RUBY ON RAILS", "POSTGRESQL", "MAPBOX", "SCSS", "HTML", "DEVISE"]}
                    />
                      <ProjectItem 
                        title="Dojo Blog" 
                        image={dojoblog}
                        description="A blog built with React.js that allows a user to create, delete and view blog posts"
                        url="https://elated-minsky-5a0fcc.netlify.app/"
                        github="https://github.com/joeycrushed/pizzajoint-framer_motion"
                        tech={["REACT", "FRAMER MOTION", "REACT ROUTER", "USESTATE", "USEEFFECTS", "CSS", "HTML"]}
                    />
                       <ProjectItem 
                        title="Pizza Joint" 
                        image={pizzajoint}
                        description="An application that creates experience of ordering a pizza. I used this application to learn the
                        framer motion, an animation library for React"
                        url="https://elated-minsky-5a0fcc.netlify.app/"
                        github="https://github.com/joeycrushed/pizzajoint-framer_motion"
                        tech={["REACT", "FRAMER MOTION", "REACT ROUTER", "USESTATE", "USEEFFECT"]}
                    />
                
            </motion.div>
        </div>
        </>
  
    )
}

export default Projects
