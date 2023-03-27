import { motion } from 'framer-motion';
import CaseHero from '@/components/CaseHero';
import CaseText from '@/components/CaseText';
import CaseImage from '@/components/CaseImage';

export default function grassboots() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CaseHero 
          color='#10642A'
          preTitle="IBM"
          title="Grassboots" 
          subtitle="environmental collective" 
          overview="We never imaged that our small group of dedicated composters would become the catalyst to unite the global environmentalist community at IBM. A case study on how a group of self-organized employees managed to harness their passion for the betterment of humanity. The goal was simple: minimize IBM's ecological footprint & spread awareness as to how." 
          image="/images/grassboots/cs-grassboots-hero.png"
          role='President, Design Leadership'
          duration='Jun 2015 - Mar 2020'
          industry='Employee engagement, sustainability, environmentalism, event planning'
        />

        <CaseText
          title="Context"
          description={["The Grassboots collective was founded during a design studio Hackathon in 2013. As time passed, the collective shifted its focus from bringing composting services into the design studio to other endeavors such as proposing policy changes, providing environmental education, and organizing events. The following are some of the significant milestones achieved by the collective."]}
        />

        <CaseImage 
          image="/images/grassboots/cs-grassboots-image-01.png"
        />

        <CaseText 
          title="My contributions & process"
          description={['I first joined the ranks of the Grassboots collective as a volunteer that helped take the studio compost out. Over time my role morphed into something akin to president. ']}
          listItems={[
            'Designed and hung astro turf installations around compost bins to increase visibility',
            'Lead and/or participate in speaking engagements on behalf of Grassboots collective',
            'Recruiting and training new members',
            'Coordinate and lead herb garden project ',
            'Organizing and planning multiple events & creating marketing for events',
            'Managing budget for projects & initiatives',
            'Collaborating with other organizations, groups and business units to promote environmental causes'
          ]}
        
        />

        <CaseText
          title="My contributions & process"
          description={["I managed UX design, user research, and project expectations with stakeholders. Because this project was taken on by designers who were already fully-staffed on product teams, the initial ask needed to be scoped more appropriately."]}
          listItems={[
            'Finalize project definition & appropriately scope for team size ',
            'Restructure the information in the leadership report in a way that would be more accessible and retainable for non-scientific audience ',
            'Redesign the leadership report to align with the target user’s primary content consumption method of an iPad'
          ]}
        />

        <CaseText 
          title='Composting, contamination and signage'
          description={[
            'It all started with a simple question: how could you make the studio space better? Luckily the founders of Grassboots responded “start composting in our studio kitchens”. They worked with campus services to negotiate bringing compost to studio spaces, which turned out to be a success. The only condition was that they had to transport the compost to the loading dock on the ground floor. After the first bin was placed, requests for more shortly followed and a group of volunteers formed.',
            'Volunteers noted how much contamination was found in each bin, the 7th floor consistently had the highest amount of contamination. Naturalistic observation over the course of multiple weeks helped us pinpoint why this bin was always contaminated. To create visual stimuli that would signify “something’s different here”  I created the astro turf installation and signage placed around pocket trash cans in the 7th floor kitchen.'
          ]}
        />

        <CaseImage
          image="/images/grassboots/cs-grassboots-image-02.png"
          caption="Mockup in Sketchup of the astro turf installation and the hung installations in multiple campus locations. "
        />

        <CaseText 
          title='Speaking events'
          description={[
            'A three month long onboarding period for new designers presented a reliable and repetitive opportunity for the Grassboots leaders to educate and recruit additional volunteers. Another opportunity we took advantage of was the annual Craft Con, this was a whole day event where IBMer’s shared a passion or craft with others on campus. We would give a history lesson on how Grassboots came to be and inspire others to start something they were passionate about. ',
          ]}
        />

        <CaseImage
          image="/images/grassboots/cs-grassboots-image-03.png"
          caption='Playing the “Is it compostable?” game with the newest cohort of designers (on the left) and speaking about the Grassboots during Craft Con.'
        />

        <CaseText
          title='Herb garden'
          description={[
            'Since the collective began, the idea of a community garden surfaced again and again. In 2017 Grassboots gained access to a budget and the potential to bring this idea to life was within reach. We started with a small scale herb garden as a proof of concept. The goal was to validate/invalidate if members would be able to maintain the garden along with daily demands of their full-time roles. As Earth Day coincided with the time when the seedlings were ready to be transplanted into larger containers, we organized an event for Earth Day to reveal the garden. ',
            'In the end the herb garden was not successful in the long run. The time and effort needed to sustain the indoor herb garden was too much and the garden was taken down. You win some and you lose some.'
          ]}
          listTitle='Project Process'
          listItems={[
            'Assess locations that are high visibility & heavy traffic ',
            'Create visual mockup of the herb garden instillation ',
            'Pitch mockup and vision to the floor manager & get approval',
            'Purchase supplies and gather materials ',
            'Plant the seedlings + wait for them to mature ',
            'Build and put together the hardware for hanging the plants '
          ]}
        />

        <CaseImage
          image="/images/grassboots/cs-grassboots-image-04.png"
          caption='Midfi mockup of the hanging garden presented to floor manager (left), basil seedlings and the collection of herbs we started.'
        />

        <CaseImage
          image="/images/grassboots/cs-grassboots-image-05.png"
          caption='The Earth day plant party was a success, we socialized the herb garden and gave out a whole bunch of seedlings. '
        />

        <CaseText
          title='Other events'
          description={[
            'Grassboots organized and planned other environmentally focused events like a food gardening demo, an upcycle screenprinting event and a multi-campus Earth Day event.'
          ]}
        />

        <CaseImage
          image="/images/grassboots/cs-grassboots-image-06.png"
          caption='We invited Liz Cardinal of Austin Edible Gardens to campus & she gave a demo on food gardening in small spaces.'
        />

        <CaseImage
          image="/images/grassboots/cs-grassboots-image-07.png"
          caption='Afterhours screenprinting event for upcycled shirts, totes and other fabric items.'
        />

        <CaseImage
          image="/images/grassboots/cs-grassboots-image-08.png"
          caption='Design thinking workshop with volunteers for the 2019 Earth Day multi-campus event.'
        />

        <div className="" style={{background: 'white', height: '20px'}}/>

        <div className="d-flex justify-content-center align-items-center w-100 pb-3 pt-3" style={{backgroundColor: 'white'}}>
          <p style={{fontFace: 'Plex-semibold', lineHeight: '20px', fontSize: '16px', background: 'white', textAlign: 'center'}}>
            The above case study is personal and does not necessarily represent IBM’s positions, strategies or opinions.
          </p>
        </div>
      </motion.div>
    </>
  );
}