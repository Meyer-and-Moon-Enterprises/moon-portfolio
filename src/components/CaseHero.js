import Container from 'react-bootstrap/Container';

export default function CaseHeader({ preTitle, title, subtitle, overview, image, role, duration, industry }) {
  return (
    <>
      <div style={{backgroundColor: '#051243', height: '522px'}}>
        <Container style={{height: '100%'}}>
          <div className='row' style={{height: '100%'}}>
            <div className='col-6 d-flex flex-column justify-content-center'>
              <div className=''>
                <h1 style={{fontSize: '48px', fontFamily: 'Plex-semibold', color: 'white'}}>
                  <span className='d-inline' style={{fontFamily: 'Plex-regular',}}>
                    {preTitle}
                  </span>
                  {' ' + title}
                </h1>
                <h2 style={{color: 'white'}}>{subtitle}</h2>
              </div>

              <div className='mt-5'>
                <h3 style={{fontFamily: 'Plex-semibold', color: 'white', fontSize: '24px', lineHeight: '32px'}}>
                  Overview
                </h3>
                <p style={{fontFamily: 'Plex-regular', color: 'white', lineHeight: '20px', fontSize: '16px'}}>
                  {overview}
                </p>
              </div>

            </div>
            <div className="col-6 d-flex flex-column align-align-items-center justify-content-end">
              <img className='img-fluid' style={{minWidth: '905px'}} src={image}></img> 
            </div>
          </div>
        </Container>
      </div>
      <div style={{backgroundColor: '#F2F4F8', height: '108px'}}>
        <Container style={{height: '100%'}}>
          <div className='row d-flex align-items-center' style={{height: '100%'}}>
            <div className={`col text-nowrap`}>
              <h3 style={{color: '#343434', lineHeight: '20px', fontSize: '16px', fontFamily: 'Plex-semibold'}}>
                Role
              </h3>
              <p style={{fontFamily: 'Plex-regular', color: '#343434', lineHeight: '20px', fontSize: '16px',}}>
                {role}
              </p>
            </div>

            <div className={`col text-nowrap`}>
              <h3 style={{color: '#343434', lineHeight: '20px', fontSize: '16px', fontFamily: 'Plex-semibold'}}>
                Duration
              </h3>
              <p style={{fontFamily: 'Plex-regular', color: '#343434', lineHeight: '20px', fontSize: '16px',}}>
                {duration}
              </p>
            </div>

            <div className={`col text-nowrap`}>
              <h3 style={{color: '#343434', lineHeight: '20px', fontSize: '16px', fontFamily: 'Plex-semibold'}}>
                Industry
              </h3>
              <p style={{fontFamily: 'Plex-regular', color: '#343434', lineHeight: '20px', fontSize: '16px',}}>
                {industry}
              </p>
            </div>
          </div>
        </Container>
      </div>

    </>
  );
}