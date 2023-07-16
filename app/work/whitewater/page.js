"use client"
import { motion } from "framer-motion";
import CaseHero from "@/app/components/CaseHero";
import CaseText from "@/app/components/CaseText";
import CaseImage from "@/app/components/CaseImage";

export default function whitewater() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ backgroundColor: "white" }}
      >
        <CaseHero
          color='#1F3647'
          preTitle='IBM'
          title='Whitewater'
          subtitle='modernizing the workforce'
          overview='Whitewater started as a grassroots movement but evolved into an official product team with the mission of implementing modern tooling and practices across IBM on a large scale. However, in a company with over 380,000 employees, strategic tool adoption and deployment posed significant challenges.'
          image='/images/whitewater/whitewater-hero.png'
          role='User Experience Design'
          duration='Aug 2015 - May 2017'
          industry='TechOps, DevOps, DesignOps, Internal Transformation'
        />

        <CaseText
          title='The problem'
          description={[
            "As part of IBM's workplace transformation, product teams increasingly integrated third-party tools to foster radical collaboration, continuous deployment, and design thinking practices. However, the lack of a united selection & adoption strategy across teams left the company without a unified approach for addressing enterprise-level needs. Additionally, there was a need to develop an educational component to ensure that all team members can effectively adopt modern tools, regardless of their individual level of technological proficiency.",
          ]}
        />

        <CaseImage
          image='/images/whitewater/cs-whitewater-image-01.png'
          caption='Examples of internal tooling that motivated high performace product teams to adopt third-party tools.'
        />

        <CaseText
          title='Project goals'
          listItems={[
            "Define a best-in-class toolchain for IBM product teams while simultaneously accepting tool requests outside of the defined toolchain",
            "Mitigate security risks for already adopted tools by migrating existing teams over to SSO versions of tools & provide adoption guidelines ",
            "Bring all existing licenses into view to enable a better negotiation position for the company",
            "Design an experience where all IBMers can easily and quickly adopt new tooling",
            "Provide training and educational content to ease tool adoption & integration into teams",
          ]}
        />

        <CaseText
          title='My contributions & process'
          description={[
            "This was the first product team I was delployed onto during my time at IBM. My primary function on the team was user experience design. This product team was staffed with three other designers. ",
          ]}
          listItems={[
            "Designed tool request form experience and team editing experience for MVP launch",
            "Collaborated closely with Slack design & engineering teams",
            "Created wireframes, mockups, and prototypes for the internal “Slack Enterprise Bridge” experience that was needed before the official enterprise version of Slack was launched ",
            "Design iterations of the Agile@IBM and IBMWhitewater merger project",
            "User research and usability testing to validate design decisions and improve user experience of Whitewater",
          ]}
        />

        <CaseText
          title='Preparing for MVP'
          description={[
            "In order to get a feel for the company’s tooling demand we needed a way to track consumption & provisioning of licenses. We identified Whitewater teams as the best way to accomplish this. The first launch was very simple, teams could sign up for a Whitewater team and add their teammates. Adding their teammates would automatically provision the individual with all tool licenses. This was a simple solution for the requesting user but the requests would kickoff back office meetings and conversations with their manager about funding for the tools.",
          ]}
        />

        <CaseImage
          image='/images/whitewater/cs-whitewater-image-02.png'
          caption='Lofi ideation on the tool request flow and flow maps of editing Whitewater teams.'
        />

        <CaseImage
          image='/images/whitewater/cs-whitewater-image-03.png'
          caption='The MVP Whitewater site launched with a focus on tools and teams.'
        />

        <CaseText
          title='Slack Enterprise Grid'
          description={[
            "After the launch of MVP the insane demand for Slack became obvious. A strong financial barrier to entry excluded many teams that were eager to adopt. This encouraged unsafe adoption and unintentionally created a divide between teams; the haves and have nots. While stakeholders & leaders more intensely focused on removing financial barriers, our team went to work building a solution to manage the hundreds of existing Slack teams. ",
            "Because Slack’s initial target users were small, nimble teams they did not have a ready solution for enterprise-sized clients. Our team worked closely with our Slack partners. We delivered insights into how team and business units were structured at the company along with our stopgap solution as we eagerly awaited the release of Slack Enterprise Grid.  ",
          ]}
        />

        <CaseImage
          image='/images/whitewater/cs-whitewater-image-04.png'
          caption='The Whitewater Slack team directory (on the left) was the stopgap solution as we waited for the launch of Slack Enterprise Grid (on the right).'
        />

        <CaseText
          title='Tool training & education'
          description={[
            "Once the great Slack fire drill was over, it was time for the team to focus on creating a solution around teaching agile practices. The team ideated on how to incorporate educational material by considering these questions: How do we teach just enough to get users interested in learning more on their own? How do we provide agile practices that users can adopt today/right now? How might we empower change agents within teams first? We came up with the concept of Patterns. These were bite sized pro-tips and practices created by experts in the context of IBM. ",
          ]}
        />

        <CaseImage image='/images/whitewater/cs-whitewater-image-05.png' />

        <div className='container' style={{ background: "white" }}>
          <div className='row'>
            <div className='col-12 '>
              <p
                className='text-center m-0 p-4'
                style={{
                  fontFamily: "Plex-italic",
                  backgroundColor: "white",
                  color: "#black",
                  lineHeight: "20px",
                  fontSize: "16px",
                }}
              >
                After a failed merger with the Agile Academy team, our team came
                up with the concept of Whitewater Patterns.
              </p>
            </div>
          </div>
        </div>

        <CaseText
          title='Evolution'
          description={[
            'Eventually, IBM Whitewater was integrated directly into the company’s intranet, resulting in a seamless experience for employees when it came to adopting and provisioning tools. As shown below, the "Favorite Tools" section on the w3 intranet home page includes popular tools such as Slack, Github, Mural, and ZenHub.',
          ]}
        />

        <CaseImage
          image='/images/whitewater/cs-whitewater-image-SPECIAL.png'
          altBackgroundColor='#203646'
        />

        <CaseText
          title='Impact'
          description={[
            "In a span of two years, our team implemented a significant transformation in the way IBM employees work. We achieved this by adopting a modern toolchain, promoting transparency across teams, advocating for agile practices and design thinking, and promoting radical collaboration.",
          ]}
          listItems={[
            "Fundamentally changed the process for adopting new tools by reducing the financial barrier",
            "Within 6 months we onboarded more than 25% of the company a new modern tool that increased productivity & collaboration  ",
            "Modern tools are now integrated onto the home page of the IBM intranet and available to all employees",
            "Informed the design and functionality of the Slack Enterprise Grid by sharing the designs of the Whitewater Directory",
          ]}
        />

        <div className='' style={{ background: "white", height: "20px" }} />

        <div
          className='d-flex justify-content-center align-items-center w-100 pb-3 pt-3'
          style={{ backgroundColor: "white" }}
        >
          <p
            style={{
              fontFace: "Plex-semibold",
              lineHeight: "20px",
              fontSize: "16px",
              background: "white",
              textAlign: "center",
            }}
          >
            The above case study is personal and does not necessarily represent
            IBM’s positions, strategies or opinions.
          </p>
        </div>
      </motion.div>
    </>
  );
}
