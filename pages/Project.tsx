import {motion as m} from 'framer-motion'

const Project = () => {
  return (
    <m.div
      animate={{y:"0%"}}
      exit={{opacity:1}}
      initial={{y:"100%"}}
      transition={{duration:0.75 , ease:"easeInOut"}}
     className="bg-[#aeb1b8] h-screen w-full absolute top-0">

    </m.div>
  )
}

export default Project