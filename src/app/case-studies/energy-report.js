import { motion } from 'framer-motion';
import CaseHero from '@/app/components/CaseHero';
import CaseText from '@/app/components/CaseText';
import CaseImage from '@/app/components/CaseImage';

export default function energyReport() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CaseHero 
          color='#2e2e2e'
          preTitle=""
          title="Energy Report" 
          subtitle="strengthening the message " 
          overview="Each year IBM tracks its energy usage across the enterprise. As energy and climate issues become increasing more urgent, telling our story becomes much more essential. Enabling leadership to retain and speak to this topic secures a space for IBM in the global energy conversation. " 
          image="/images/energy-report/energy-report-hero.png"
          role='User Experience Design, DT facilitator'
          duration='Jan 2019 - Jun 2019'
          industry='Environmental reporting, corporate energy usage, renewable resources'
        />

        <CaseText
          title="The problem"
          description={["The Corporate Environmental Affairs team produces two reports annually to showcase the company's energy usage and advancements on energy-related projects and goals. However, these reports are technical and filled with industry-specific scientific jargon that is difficult for non-industry personnel to retain and comprehend. The reports are delivered to company leadership and the general public, respectively. This project’s aim was to redesign how this essential information could be shared in a more consumable manner to the intended audiences."]}
        />

        <CaseImage 
          image="/images/energy-report/cs-energy-report-image-01.png"
          caption="2017 environmental report for the general public - 52 pages (on the left) and the environmental report for IBM leadership - 22 pages (on the right)."
        />

        <CaseText 
          title="Project goals"
          listItems={[
            "Overhaul both annual environmental reports that are created by the Corporate Environmental Affairs team to be more enguaging and consumable by a non-scientific audience ",
            'Redesign the leadership report to align with the target user’s primary content consumption method of an iPad',
            'Create in-roads with the Corporate Environmental Affairs team to encourage future collaboration between the environmental and design arms at the company'
          ]}
        
        />

        <CaseText
          title="My contributions & process"
          description={["I managed UX design, user research, and project expectations with stakeholders. Because this project was taken on by designers who were already fully-staffed on product teams, the initial ask needed to be scoped more appropriately."]}
          listItems={[
            'Finalize project definition & appropriately scope for team size ',
            'Locate the key insights in the report and restructure the information in a way that’s more accessible and retainable for a non-scientific audience',
            'Contribute low to mid fidelity design iterations and mockups for the reimagined leadership report'
          ]}
        />

        <CaseText 
          title='Project definition workshop'
          description={['The requesting team had never worked with designers before, which created a break down in communication at first. In order to get a better understanding of what was being asked of us, I sent out a survey to stakeholders, synthesized the results and held a playback meeting to get into alignmnet. The team wanted help rethinking both reports and the redesign to be complete within 4 months. With only 3 designers, who were already staffed full-time on product teams, meeting this deadline wasn’t feasible. We compromised and focused on the report for IBM leadership.']}
        />

        <CaseImage
          image="/images/energy-report/cs-energy-report-image-02.png"
          caption="Screenshots of the Mural where I synthesized survey results from stakeholders."
        />

        <CaseText 
          title='Collaboration & ideation'
          description={[
            'The team got busy dissecting last years report. It was difficult to locate the essential pieces of information. We collaborated with the Corporate Environmental Affairs team, going through MANY iterations of the report’s information architecture (IA) until landing on a clear structure. After the IA was defined it was time to ideate on how the new report might be laid out and delivered. I spent time ideating on a simple handout-styled design. We ended up moving forward with a landscape-oriented design in the end to better suite the use of an iPad. ',
          ]}
        />

        <CaseImage
          image="/images/energy-report/cs-energy-report-image-03.png"
          caption='The input and output of the information architecture work (on left), lofi ideation of a simple handout (middle) and a midfi mockup of handout (on right). '
        />

        <CaseText
          title='Ship it'
          description={[
            'Below is the final version of the report that was sent to leadership. The designer, Mrinali Kamath, took the project into high fidelity and utilized the IBM Design Language to bring this report into brand alignment.  '
          ]}
        />

        <CaseImage
          image="/images/energy-report/cs-energy-report-image-SPECIAL.png"
          altBackgroundColor='#2e2e2e'
        />

        <CaseText
          title='Impact'
          description={[
            'Working with teams that have never interfaced with design before are some of my favorite projects. Everyone learns new skills and takes them back to their normal roles to help influence other teams around them.'
          ]}
          listItems={[
            'Our redesign was praised by the CEO and SVPs ',
            'Infuse another part of the company with design thinking and collaboration ',
            'Directly influenced the ability of IBM leadership to better speak to energy & climate with their peers '
          ]}
        />

        <div className="" style={{background: 'white', height: '30px'}}/>

        <div style={{backgroundColor: 'white'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
              </div>
              <div className="col-lg-8">
                <p style={{fontSize: '18px', lineHeight: '20px', fontFamily: 'Plex-regular'}}>
                  “On behalf of Corporate Environmental Affairs we thank you for your help in improving the design of one of our flagship reports which we take pride in producing every year. 
                </p>
                <p style={{fontSize: '18px', lineHeight: '20px', fontFamily: 'Plex-regular'}}>
                  It also did not escape us the fact that you volunteered to help us and you took on this extra work even though it had nothing to your regular responsibilities.  For this, we doubly THANK YOU! It was such a refreshing experience working with you, and I learned something.
                </p>
                <p style={{fontSize: '18px', lineHeight: '20px', fontFamily: 'Plex-regular'}}>
                  You were confident yet respectful and above all, patient with the numerous iterations that we made. You reflect the best of IBM.  I hope our paths cross again and I wish you all the successes.” 
                </p>
                <p style={{fontSize: '16px', lineHeight: '20px', fontFamily: 'Plex-italic'}}>
                  - VP of Environmental, Energy & Chemical Management Programs
                </p>
              </div>
            </div>
          </div>
        </div>

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