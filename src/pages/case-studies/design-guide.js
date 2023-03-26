import { motion } from 'framer-motion';
import CaseHero from '@/components/CaseHero';
import CaseText from '@/components/CaseText';
import CaseImage from '@/components/CaseImage';

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
          image="/images/design-guide/design-guide-hero.png"
          role='Research lead, User Experience Design, DT facilitator'
          duration='Oct 2018 - Apr 2019'
          industry='Internal branding, employee experience, workplace transformation'
        />

        <CaseText
          title="The problem"
          description="The lack of clear internal brand guidance causes a disjointed experience for employees. Every day thousands of employees access the intranet and other IBM tools to get their job’s done. It can be difficult for employees to distinguish between tools and experiences that are meant for internal vs. external use, leading to confusion and potential security risks for the company. The complexity of this project was impacted by the release and mandated adoption of the new IBM Design Language which was misaligned with the existing patchwork of internal-facing experiences. "
          listTitle=""
          listItems={[]}
        />

        <CaseImage 
          image="/images/design-guide/cs-design-guide-image01.png"
          caption="Various works created by the CIO design team."
        />

        <CaseText
          title="My contributions & process"
          description="My primary responsibility for this project was lead user researcher. I also utilized my user experience design, usability testing, design thinking and facilitation skills."
          listTitle=""
          listItems={[
            'Conducted 40 interviews with target users, synthesised and presented my findings to project leadership',
            'Created personas informed by user interviews and identified which to serve first for largest impact/value',
            'Designed & facilitated a 2 day remote branding workshop with project leadership and other stakeholders',
            'Conducted comparitive analysis on w3DS and IBM Design Language, presented findings & informed on adoption strategy for w3DS team',
            'Usability testing & synthesis'
          ]}

        />
      </motion.div>
    </>
  );
}