import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Header = () => {
  return (
    <motion.nav 
      variants={fadeIn('down')}
      initial='initial'
      animate='animate'
      className="header"
    >
        <span className="header-logo">CLEAN JUICE</span>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
        </ul>

        <span className="header-account">My account</span>
        <span className="header-user"></span>
    </motion.nav>
  )
}

export default Header