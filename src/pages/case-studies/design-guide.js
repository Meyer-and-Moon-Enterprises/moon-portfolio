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
          description={["The lack of clear internal brand guidance causes a disjointed experience for employees. Every day thousands of employees access the intranet and other IBM tools to get their job’s done. It can be difficult for employees to distinguish between tools and experiences that are meant for internal vs. external use, leading to confusion and potential security risks for the company. The complexity of this project was impacted by the release and mandated adoption of the new IBM Design Language which was misaligned with the existing patchwork of internal-facing experiences. "]}
          listTitle=""
          listItems={[]}
        />

        <CaseImage 
          image="/images/design-guide/cs-design-guide-image01.png"
          caption="Various works created by the CIO design team."
        />

        <CaseText 
          title="Project goals"
          listItems={[
            'Conduct user research to validate/invalidate project’s value',
            'Help CIO designers navigate conflicting design guidance in order to streamline the design process',
            'Define a clear internal brand for IBM that would distinguish it from external-facing products while maintaining alignment with the new IBM Design Language',
            'Define the IBM Design Language adoption & integration strategy for the w3DS (internal design system) team',
            'Create design guidance specific to the work produced by the Chief Information Office to aid in the creation of cohesive employee-facing experiences'
          ]}
        
        />

        <CaseText
          title="My contributions & process"
          description={["My primary responsibility for this project was lead user researcher. I also utilized my user experience design, usability testing, design thinking and facilitation skills."]}
          listTitle=""
          listItems={[
            'Conducted 40 interviews with target users, synthesised and presented my findings to project leadership',
            'Created personas informed by user interviews and identified which to serve first for largest impact/value',
            'Designed & facilitated a 2 day remote branding workshop with project leadership and other stakeholders',
            'Conducted comparitive analysis on w3DS and IBM Design Language, presented findings & informed on adoption strategy for w3DS team',
            'Usability testing & synthesis'
          ]}
        />

        <CaseText 
          title='Personas'
          description={['For the MVP, we focused on the the design disciplines that would gain the most value from design guidance first. That meant we focused on the visual designers, multimedia designers and new hires. Visual and multimedia designers are typically the last wall of defense before a design artifact goes live, and new hires on the team need access to design guidance during the onboarding process. ']}
          listTitle='Overlapping pain points'
          listItems={[
            'Current design system doesn’t encompass all types of work they’re assigned ',
            'Having to recreate design artifacts over and over again for each new project ',
            'Doesn’t understand the larger ecosystem of design at IBM, when to use the different design systems',
            'Outdated w3DS forces work to be bulky & generic'
          ]}
        />

        <CaseImage
          image="/images/design-guide/cs-design-guide-image02.png"
          captiion="User personas created to represent the various diciplines within the CIO design team."
        />

        <CaseText 
          title='Branding workshop'
          description={['The goals of this workshop were: define the internal brand, align with the internal design system team on responsibilities, review & update initial project goals. The workshop was fully remote and conducted on the tool Mural which spanned 2 days. At the end of day one both teams were aligned on project goals and comfortable moving forward. Day 2 focused on defining the brand of the CIO Design Guide. How and why should it stand apart from the IBM Design Language?']}
        />

        <CaseImage
          image="/images/design-guide/cs-design-guide-image03.png"
          caption="Screenshots of the branding workshop activities completed in Mural by the team."
        />

        <CaseText
          title='First release strategy'
          description={['We needed to find an eloquent way of adopting the base styles of IBM Design Language into the CIO Design Guide without sending users back-and-forth between sites. To make this as painless as possible the team chose to adopt the same navigational structure and site layout as the IBM Design Language. Because we were mimicking the format of the IBM Design Language site, initially there was little thought about page layout or UX. During usability testing we found out that was time consuming mistake.']}
        />

        <CaseImage
          image="/images/design-guide/cs-design-guide-image04.png"
          caption='Along with a copy of the IDL color palette, the CIO Design Guide provided color resources for common design tools used on the team. '
        />

        <CaseText
          title='Usability testing & ideation'
          description={[
            'Our most important goal for testing was to determine if we had successfully conveyed the relationship between this guide, w3DS, and the IBM Design Language. During testing we found that all participant were confused about how w3DS related to the CIO Design Guide and that the site architecture caused confusion about the hierarchy of pages.',
            'The team went to work ideating on how we might solve for both of those problems. The landing page design was updated to include a comparision table that users could reference to easily understand which guidance was to be applied to which projects. I contributed to the redesign of the landing page and was responsible for updating the site’s architecture to better fit the context and goals of this project.'
          ]}
        />

        <CaseImage
          image="/images/design-guide/cs-design-guide-image05.png"
          caption='Quick jump off points to popular sections and the design guidance table were highly requested by users.'
        />

        <CaseText
          title='Site architecture'
          description={['Because the initial strategy for this project was to mimick the format of the IBM Design Language site, there was little thought about how the CIO Design Guide’s site architecture might need to differ. As the usability testing feedback rolled in it was clear that the initial version of the site’s architecture was confusing and dense. I was able to break out the CIO design specific guidelines from the base styles brought over by the IBM Design Language which made all the difference.']}
        />

        <CaseImage
          image="/images/design-guide/cs-design-guide-image06.png"
          caption='Quick jump off points to popular sections and the design guidance table were highly requested by users.'
        />

        <CaseText
          title="Trending in the correct direction"
          description={['Within a few months of the first draft of the CIO Design Guide going live for use, we started to see a more cohesive set of assets coming out of the design team. Below you can see a comparision of work created before the CIO Design Guide (to the left) and work produced afterwards (to the right). Adopting color, iconography and typography from the IBM Design Language went a long way in bringing the internal and external brands into alignment. Similar like sisters but still distinctly different to enable employees to differentiate between internal (light) and external (dark) facing  experiences. ']}
        />


        <CaseImage
          image="/images/design-guide/cs-design-guide-image-SPECIAL.png"
          altBackgroundColor='linear-gradient(to right, #005A8E 50%, #0143CE 50%)'
        />

        <CaseText
          title='Impact'
          description={['Within 6 months our scrappy little team was able to deliver value by releasing our MVP as an Invision prototype. CIO designers were able to access the prototype as if it were the real site and immediately start using the templates and guidelines.']}
          listItems={[
            'Work coming out of the CIO team became more cohesive and in-line with the broader design direction on IBM',
            'With in the first month of MVP launch our Sketch libraries were downloaded 36 times (118 person design team)',
            'Observing less deviation from design guidance from design deliverables produced for CIO projects ',
            'Shortly after MVP; print, brand & logos, motion and storyboarding guidance were added to the guide',
            'The work & research from this project served as the bedrock to additonal internal branding projects that came after it. Read more about internal branding at IBM. '
          ]}
        />


        <div className='spacer' style={{backgroundColor: 'white'}} />
        <div className="d-flex justify-content-center align-items-center w-100 pb-3 pt-3" style={{backgroundColor: 'white'}}>
          <p style={{fontFace: 'Plex-regular', lineHeight: '20px', fontSize: '16px', background: 'white'}}>The above case study is personal and does not necessarily represent IBM’s positions, strategies or opinions.</p>
        </div>
      </motion.div>
    </>
  );
}