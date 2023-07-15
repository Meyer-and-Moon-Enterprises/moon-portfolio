"use client"
import Hero from '../components/Hero';
import { MotionPageWrapper } from '../components/MotionPageWrapper';
import WorkList from '../components/WorkList';
import { motion } from 'framer-motion';

export default function Work() {
  return (
      <MotionPageWrapper>
        <Hero />
        <WorkList />
      </MotionPageWrapper>
  );
}
