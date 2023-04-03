import { motion } from 'framer-motion';
import CaseHero from '@/components/CaseHero';
import CaseText from '@/components/CaseText';
import CaseImage from '@/components/CaseImage';

export default function whitewater() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ backgroundColor: 'white' }}
      >
        <CaseHero 
          color='#1D353F'
          preTitle="SingleFile"
          title="" 
          subtitle="federal compliance made easy" 
          overview="SingleFile’s main objective is to disrupt how fast-growing companies deal with compliance. Understanding government systems and procedures is tricky and time extensive. We’re reducing the administrative headaches and anxiety of compliance filing, so people get more time to focus on high-value work."
          image="/images/singlefile/singlefile-hero.png"
          role='Senior Product Designer'
          duration='Mar 2020 - Dec 2022'
          industry='Federal compliance, entity management, automation, online workflows, reminder service'
        />

        <CaseText
          title="The problem"
          description={["It’s common knowledge in the legal industry that Delaware is a popular place to form businesses due to tax incentives. But many businesses are not based out of Delaware and find the state's regulations unfamiliar. Every year businesses, new and old alike, are required to file their annual report and pay franchise taxes. The process can be complicated and the state profits from mistakes so there is little to no incentive to improve the experience for business owners who embark on filing this report themselves. This project aimed to change all of that by simplifying the process start to finish. "]}
        />

        <CaseText
          title="Project goals"
          listItems={[
            'Streamline and enhance online workflow based on user feedback gathered from the previous year’s implementation',
            'Reduce fulfillment time for the customer support team by infusing the process with automation',
            'Enhance user experience by gathering data directly from the Delaware database & pre-populating forms',
            'Leverage existing customer data from previous filings by pre-populating annual report workflow, to reduce time-to-file and potential clerical errors',
            'Encourage customers to file in advance to reduce strain on the customer support team near the annual report deadline to ensure good standing'
          ]}
        />

        <CaseImage 
          image="/images/singlefile/cs-singlefile-image-01.png"
          caption="An overview of the Delaware annual report filing process as it is provided by the State of Delaware."
        />

        <CaseText
          title="My contributions & process"
          description={[
            'As the sole designer, my role encompassed a diverse range of responsibilities, including project planning and management, user research, requirements gathering, product design, and metric tracking.'
          ]}
          listItems={[
            'Reviewed previous year’s experience from from first interaction to last & iterate on design and team processes to decrease filing time and improve user experience',
            'Iterated on annual report reminder series through collaboration with CEO and CGO. Focused on changing messaging to be most effective for each subtype of user.',
            'Conducted research to glean insights on what did and did not work from the previous year. This included customer interviews, reviewing logged user sessions and leveraging the team’s feedback from delivering the previous year’s experience. ',
            'Ideating, sketching, wireframing, and prototyping design updates. Rearranging steps in the workflow for more fitting sections, reduced the importance of educational material in UI, redesign checkout section, added logos & language around payment to increase trust from users, and reworking the final review step to clearly show line item breakdown.'
          ]}
        />

        <CaseText
          title="Breaking it down"
          description={[
            "Breaking down the data required for the Delaware filing into its smallest attributes allowed me to map and group the data to SingleFile's content models. This made the filing workflow more manageable for users by dividing it into smaller parts. We also needed to consider how we could prompt users to file with us and how the customer success team would fulfill orders, even though those were separate processes outside of the product software. It was crucial to have a holistic understanding of the entire process."
          ]}
        />

        <CaseImage
          image="/images/singlefile/cs-singlefile-image-02.png"
          caption="The Delaware annual report process mapped out across applications and teams, along with content models and how they related."
        />

        <CaseText
          title="Reminder series"
          description={[
            "Every year this particular report is due on the same date - March 1st - making it slightly more predictable than other state compliance deadlines. Despite this, new business owners miss the deadline each year, resulting in hundreds or thousands of dollars in late penalties and fees. To prevent this, a reminder email series was created to prompt customers to file at least 90 days before the deadline. The messaging and cadence of these reminders were refined every tax season, becoming more sophisticated over time."
          ]}
        />

        <CaseImage
          image="/images/singlefile/cs-singlefile-image-03.png"
          caption="The reminder series includes six separate emails that are sent in a sequence over 90 days leading up to the March 1st deadline."
        />

        <CaseText
          title="Interactive calculator"
          description={[
            "As seen in the first image of this case study, the Delaware website does not utilize modern design practices or front -end web development. The potential for improvement in this area was extremely high. During my first year at SingleFile, I designed an interactive calculator feature that was included in the online workflow. Being new to the compliance industry gave me a unique advantage to deconstruct Delaware's form with a fresh perspective. The solution I created strikes a delicate balance between providing sufficient information for expert users and teaching unfamiliar users how the tax is calculated."
          ]}
        />

        <CaseImage
          image="/images/singlefile/cs-singlefile-image-04.png"
          caption="Iterations of the interactive calculator feature and the final design that was shipped with the 'See the math' section expanded."
        />

        <CaseText
          title="Iterative design"
          description={[
            "Every year, we had the opportunity to improve the Delaware annual report product by iterating on the previous year's design. Between the 2021 and 2022 tax seasons, we spent design cycles enhancing the checkout experience. In the previous year, the workflow lacked an integrated payment system, leading to a disjointed experience for users. To streamline the process, we integrated Stripe into the workflow, enabling users to submit their orders and payments in a single smooth interaction. The iteration also focused on bringing clarity to the line items that made up the total balance. Since state agencies are usually ambiguous in their invoices and receipts, we aimed to provide transparency to our users."
          ]}
        />

        <CaseImage
          image="/images/singlefile/cs-singlefile-image-05.png"
          caption="Before the 2022 season began we overhauled the checkout section of the workflow and increased clarity around line items. "
        />

        <CaseText
          title="Decreasing the cognitive load"
          description={[
            "By approaching an existing process with a fresh perspective and breaking down the data into its smallest attributes, we were able to significantly enhance the user experience for filing Delaware's annual report and franchise tax. The user flow diagram below illustrates each step of the workflow."
          ]}
        />

        <CaseImage
          image="/images/singlefile/cs-singlefile-image-SPECIAL.png"
          altBackgroundColor={'#1C353F'}
        />

        <CaseText
          title="Impact"
          listItems={[
            "Reduced the time to file from approximately 10 minutes per customer success representative to 2 minutes. A 80% reduction in time per filing.",
            "Significantly increasing the capacity of the customer success team without adding additional headcount  ",
            "The team continuously iterated on the Delaware annual report process to reduce the time users spent completing the filing, ultimately delivering on company’s promise to streamline the compliance process.",
            "The customer support team observed a reduction in the number of support tickets related to filing inquiries by adjusting the language and layout of reminder messages sent to customers",
            "Our business's profitability improved by adding language about processing fees in the checkout section, which encouraged customers to switch to the ACH payment method. This change saved both our customers and our business money."
          ]}
        />
        
        <div className="" style={{background: 'white', height: '20px'}}/>

        <div className="d-flex justify-content-center align-items-center w-100 pb-3 pt-3" style={{backgroundColor: 'white'}}>
          <p style={{fontFace: 'Plex-semibold', lineHeight: '20px', fontSize: '16px', background: 'white', textAlign: 'center'}}>
            The above case study is personal and does not necessarily represent SingleFile’s positions, strategies or opinions.
          </p>
        </div>
      </motion.div>
    </>
  );
}