import { useEffect, useState } from "react";
import Image from "next/image";

export default function CaseImage({ image, alt, caption, altBackgroundColor }) {
  const [mainDivStyle, setMainDivStyle] = useState();
  const [newCaption, setNewCaption] = useState('');

  useEffect(() => {

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
      <div className="" style={{background: 'white', height: '40px'}}/>

      <div id="BACKGROUND_COLOR" className="" style={mainDivStyle}>
        <div className="container">
          <div className="row">
            <div className="col-12 " >
              <img src={image} alt={alt} style={{}} className="img-fluid"></img>
              {newCaption}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}