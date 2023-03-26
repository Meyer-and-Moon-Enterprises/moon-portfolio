import AboutComponent from '../components/About';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutComponent />
      </motion.div>
    </>
  );
}
