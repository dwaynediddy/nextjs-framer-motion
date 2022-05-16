import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../variants"

const TextContainer = () => {
  return (
    <motion.div 
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className="textContainer"
    >
        <div className="textContainer-top">
            <motion.span 
                variants={fadeIn()}
                className="text-green-600">Find more juice</motion.span>
            <motion.span 
                variants={fadeIn()}
                className="first-letter:text-5xl">kepac</motion.span>
        </div>
        <motion.div 
            variants={fadeIn()}
            initial='initial'
            animate='animate'
            className="textContainer-middle">
            <span>ORANGE</span>
        </motion.div>
        <div className="textContainer-bottom">
            <motion.button
                variants={fadeIn()}
            >
                Show More
            </motion.button>
            <motion.p
                variants={fadeIn()}
            >
                delicious <span>fresh</span><br /> produce, right here
            </motion.p>

        </div>
    </motion.div>
  )
}

export default TextContainer