import {motion as m} from 'framer-motion'

const Skills = () => {
  return (
    <m.div 
    animate={{y:"0%"}}
    exit={{opacity:1}}
    initial={{y:"100%"}}
    transition={{duration:0.75 , ease:"easeInOut"}}
    className="bg-[#9fc0af] w-full h-screen absolute top-0">
      
    </m.div>
  )
}

export default Skills