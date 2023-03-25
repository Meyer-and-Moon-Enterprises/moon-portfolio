import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import WorkList from '../partials/WorkList';
import { motion } from 'framer-motion';

export default function Work() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <WorkList />
      </motion.div>
    </>
  );
}
