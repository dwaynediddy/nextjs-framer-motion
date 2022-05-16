import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const TextContainer = () => {
  return (
    <div className="textContainer">
        <div className="textContainer-top">
            <span className="text-green-600">Find more juice</span>
            <span className="first-letter:text-5xl">kepac</span>
        </div>
        <motion.div 
            variants={fadeIn()}
            initial='initial'
            animate='animate'
            className="textContainer-middle">
            <span>ORANGE</span>
        </motion.div>
        <div className="textContainer-bottom">
            <button>Show More</button>
            <p>delicious <span>fresh</span><br /> produce, right here</p>

        </div>
    </div>
  )
}

export default TextContainer