import "./styles.css"
import VideoComp from "./components/video"
import React, { useRef } from "react"
import WelcomeMessage from "./components/Welcome"
import {Parallax , ParallaxLayer} from '@react-spring/parallax'
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import ParticlesComp from './components/particles'
import { motion } from "framer-motion"
import Card from "./components/SkillsCard"
import ProjectCard from "./components/Projects"
import { Canvas} from "@react-three/fiber"
import {OrbitControls} from '@react-three/drei'
import Sphere from "./components/threeModel"
import ContactCard from "./components/contact"


export default function App(){
  
  return(
    <>
    
    <Parallax pages={5}>
    
    <div>
      <ParallaxLayer offset={0}>
        <MouseParallax strength={0.04} shouldResetPosition={true}>
        <ParticlesComp/>
          <div className="container">         
          <div className="component-left"> <WelcomeMessage /></div>
          <div className="component-right"> <VideoComp />  </div>
          </div>
        </MouseParallax>
        
        
      </ParallaxLayer>
      </div>



      
      
      {/* Second Page starts here */}



      <ParallaxLayer offset={1} speed={0.15} className="par1" >
       <div className="container2"> 
      <div className="left">
      <motion.div className="sphere" 
        initial={{opacity: 1, translateX:-300}} 
        whileInView= {{opacity:1, translateX: 0, }} 
        transition={{duration: 1.8}}
        viewport={{once:true}}>

      <Canvas>
      
        <Sphere/>
      <OrbitControls
        enableZoom = {false}
        enablePan={true}
        enableRotate={true}
        panSpeed={0.8}
        rotateSpeed={0.6}
        />
      </Canvas>
      
      </motion.div>
      </div>



      <div className="right">
      <motion.div className="text-container"
      initial={{opacity: 1, translateX:300}} 
      whileInView= {{opacity:1, translateX: 0, }} 
      transition={{duration: 1.8}}
      viewport={{once:true}}>
      
      <h1>Imagination-to-life</h1> <br />
      <p>I derive great satisfaction from transforming imaginative concepts into tangible creations. 
      I invite you to explore a captivating representation of the planet Mars crafted using Three.js, with the sun shining on it.
      The interactive feature enables you to effortlessly move the planet around by dragging it. 
      Your engagement in this exploration is encouraged, and I welcome any feedback or insights you may have. Enjoy the immersive experience!
      </p>
      
      </motion.div>
      </div>
      </div>
      </ParallaxLayer>






 

      {/* Third page starts here */}


      <ParallaxLayer offset={2} speed={0.15}  >
      
      
      <div className="container-plane"> 
      <div className="right">
      <motion.div className="text-container"
      initial={{opacity: 1, translateX:-300}} 
      whileInView= {{opacity:1, translateX: 0, }} 
      transition={{duration: 1.8}}
      viewport={{once:true}}>
        <h1>My Skills</h1> <br />
        <p>Featured here are some of my showcased skills.
        My skill set spans a range of technologies, including React, Node.js, Three.js, Express, MongoDB, jQuery, AJAX, 
        JavaScript, Python, C++, programming in R, SQL, HTML, and CSS. I have a keen enthusiasm for exploration and a continuous commitment to learning new things. You can play around
        with the card showcasing my skills!
        </p>
        </motion.div>
      </div>


          <div className="left">
          <motion.div className="plane" 
        initial={{opacity: 1, translateX:300}} 
        whileInView= {{opacity:1, translateX: 0, }} 
        transition={{duration: 1.8}}
        viewport={{once:true}}>
            <Canvas>
              <Card/>
              <OrbitControls
                enableZoom = {false}
                enablePan={true}
                enableRotate={true}
                panSpeed={1}
                rotateSpeed={1}/>
            </Canvas>
            </motion.div>
          </div>
          
          

        </div>


        
        
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.15}  >
      
      <div className="container2"> 
      <div className="left">
      <motion.div className="plane" 
        initial={{opacity: 1, translateX:-300}} 
        whileInView= {{opacity:1, translateX: 0, }} 
        transition={{duration: 1.8}}
        viewport={{once:true}}
        inView={false}
        >

      <Canvas>
      
        <ProjectCard/>
      <OrbitControls
        enableZoom = {false}
        enablePan={true}
        enableRotate={true}
        panSpeed={0.8}
        rotateSpeed={0.6}
        />
      </Canvas>
      
      </motion.div>
      </div>



      <div className="right">
      <motion.div className="text-container"
      initial={{opacity: 1, translateX:300}} 
      whileInView= {{opacity:1, translateX: 0, }} 
      transition={{duration: 1.8}}
      viewport={{once:true}}>
      
      <h1>My Projects</h1> <br />
      <p>I find genuine excitement in expressing myself through my projects.
      On this card, you'll see a project that marked the beginning of my interest in web development. I made this local job search
      app in a group. Flip the card to learn about other projects! 
      If you are experiencing difficulty viewing project video on your mobile device, ensure that your device is not in power-saving mode.      </p>
      
      </motion.div>
      </div>
      </div>
      </ParallaxLayer>




      <ParallaxLayer offset={4}>

        
      <div className="container-plane"> 
      <div className="right">
      <motion.div className="text-container"
      initial={{opacity: 1, translateX:-300}} 
      whileInView= {{opacity:1, translateX: 0, }} 
      transition={{duration: 1.8}}
      viewport={{once:true}}>
        <h1>Connect with me!</h1>
        <p>Connect with me on LinkedIn and let's expand our professional networks! I'm passionate about Web Development 
        and I'm always eager to connect with like-minded professionals. Looking forward to connecting with you!
        <br />
        <button className="btn">
          <a target="blank" href="https://www.linkedin.com/in/sid8/">LinkedIn</a>
        </button>
        </p>
        
        
        </motion.div>
      </div>


          <div className="left">
          <motion.div className="plane" 
        initial={{opacity: 1, translateX:300}} 
        whileInView= {{opacity:1, translateX: 0, }} 
        transition={{duration: 1.8}}
        viewport={{once:true}}>
            <Canvas>
              <ContactCard/>
              <OrbitControls
                enableZoom = {false}
                enablePan={true}
                enableRotate={true}
                panSpeed={1}
                rotateSpeed={1}/>
            </Canvas>
            </motion.div>
          </div>
          
          

        </div>


      </ParallaxLayer>



      </Parallax> 
      
      
      
      </>
  )
}
 
