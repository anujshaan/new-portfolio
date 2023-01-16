import {motion as m} from 'framer-motion'

const About = () => {
  return (
    <m.div 
    animate={{y:"0%"}}
    exit={{opacity:1}}
    initial={{y:"100%"}}
    transition={{duration:0.75 , ease:"easeInOut"}}
    className="bg-[#5686E5] w-full h-screen absolute top-0">
      
    </m.div>
  )
}

export default About