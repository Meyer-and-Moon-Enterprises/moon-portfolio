export default function CaseText({ title, description, listTitle, listItems}) {
  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="row pt-5 w-100">
            <div className="col-4">
              <h1 className="" style={{fontSize: '24px', lineHeight: '32px', fontFamily: 'Plex-semibold'}}>
                {title}
              </h1>
            </div>
            <div className="col-8">
              {(description) ? (
                <p className="" style={{fontFamily: 'Plex-regular', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
                  {description}
                </p>
              ):(
                ''  
              )}
              {(listTitle) ? (
                <p className="" style={{fontFamily: 'Plex-semibold', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
                  {listTitle}
                </p>
              ):(
                ''  
              )}
              {(listItems) ? (
                <p className="" style={{fontFamily: 'Plex-regular', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
                  {listItems.map((item) => (
                    <li>{item}</li>
                  )
                  )}
                </p>
              ):(
                ''  
              )}
            </div>
          </div>
        </div>
      </div>    
    </>
  );
}