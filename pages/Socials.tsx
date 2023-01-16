import {motion as m} from 'framer-motion'

const Socials = () => {
  return (
    <m.div 
    animate={{y:"0%"}}
    exit={{opacity:1}}
    initial={{y:"100%"}}
    transition={{duration:0.75 , ease:"easeInOut"}}
    className="bg-gray-900 w-full h-screen absolute top-0">
      
    </m.div>
  )
}

export default Socials