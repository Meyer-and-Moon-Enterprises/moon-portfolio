import { useEffect, useState } from "react";

export default function CaseImage({ image, alt, caption, altBackgroundColor }) {
  const [mainDivStyle, setMainDivStyle] = useState();
  const [newCaption, setNewCaption] = useState('');

  useEffect(() => {
    console.log("inside useEffect altBackgroundColor: ", altBackgroundColor)

    if (altBackgroundColor) {
      setMainDivStyle({background: altBackgroundColor, paddingBottom: '0px'}) 
    }
    else{
      setMainDivStyle({backgroundColor: 'white', paddingBottom: '0px'})
    }

    if (caption) {
      setNewCaption(() => {
        return (
          <p className="text-center m-0 p-4" style={{fontFamily: 'Plex-italic',backgroundColor: '#F2F4F8', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
            {caption}
          </p>
        )
      })}
  }, [])

  return (
    <>
      <div id="BACKGROUND_COLOR" className="mb-0" style={mainDivStyle}>
        <div className="container">
          <div className="row w-100">
            <div className="col-12">
              <img src={image} alt={alt} className="img-fluid"></img>
              {newCaption}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}