import { motion } from 'framer-motion';
import CaseHero from '@/components/CaseHero';
import CaseText from '@/components/CaseText';

export default function designGuide() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CaseHero 
          preTitle="CIO"
          title="Design Guide" 
          subtitle="unifying the internal brand" 
          overview="IBM's workplace transformation led to a surge in demand for design assets from the Chief Information Office. The CIO design team expanded and took on numerous projects, but this growth inadvertently caused a lack of cohesion and double-work. To address these issues, the CIO Design Guide was created to unify the internal landscape, integrate a new design language, and reduce double-work." 
          image="/images/design-guide-hero.png"
          role='Research lead, User Experience Design, DT facilitator'
          duration='Oct 2018 - Apr 2019'
          industry='Internal branding, employee experience, workplace transformation'
        />

        <CaseText
          title="The problem"
          description="short description"
          listTitle="bold list title"
          listItems={["list item 1", "list item 2", "list item 3"]}
        />

      </motion.div>
    </>
  );
}