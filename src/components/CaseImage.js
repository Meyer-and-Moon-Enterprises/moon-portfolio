export default function CaseImage({ image, alt, caption }) {
  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="row pt-5 w-100">
            <div className="col-12">
              <img src={image} alt={alt} className="img-fluid"></img>
              <p className="text-center p-3" style={{fontFamily: 'Plex-italic',backgroundColor: 'rgb(241,	242,	247)', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
                {caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}