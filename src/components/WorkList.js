import WorkCard from './WorkCard';

export default function WorkList () {
  return (
      <div className={`container blackBackground container-fluid`} >
        <div className={`container blackBackground`}>
          <p className={`pt-5`} style={{fontWeight: 700, fontSize: '2rem', lineHeight: '2rem'}}>SELECT WORKS</p>
          <div className='row justify-content-between w-100'>
            <div className='col-12 col-xl-6'>
              <WorkCard
                image='/images/singlefile-card.png'
                summary='2020 - 2022  |  Senior Product Design  |  SingleFile Technologies'
                headline='Reducing the administrative headaches and anxiety of federal compliance'
                link='/case-studies/singlefile'
              />
            </div>
            <div className='col-12 col-xl-6'>
              <WorkCard
                image='/images/composter-card.png'
                summary='2016 - 2020  |  President, UX Design, Leader  |  IBM'
                headline='Community building for environmentally passionate employees'
                link='/case-studies/grassboots'
              />
            </div>
            <div className='col-12 col-xl-6'>
              <WorkCard
                image='/images/ibm-tooling-card.png'
                summary='2015 - 2017  |  User Experience Design  |  IBM'
                headline='Transforming the workforce by adopting modern tooling & practices at IBM '
                link='/case-studies/whitewater'
              />
            </div>
            <div className='col-12 col-xl-6'>
              <WorkCard
                image='/images/ibm-cio-card.png'
                summary='2018 - 2019  |  UX Research & Design  |  IBM'
                headline='Internal brand unification to improve the employee experience'
                link='/case-studies/design-guide'
              />
            </div>
            <div className='col-12 col-xl-6'>
              <WorkCard
                image='/images/ibm-annual-energy-card.png'
                summary='2019  |  User Experience Design & Facilitation  |  IBM'
                headline='Enable leadership to retain & speak to IBM’s role in the environmental climate conversation'
                link='/case-studies/energy-report'
              />
            </div>
          </div>
          <div className={`spacer`}></div>
        </div>
      </div>
  );
}
