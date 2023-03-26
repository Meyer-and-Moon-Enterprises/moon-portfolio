import { useEffect, useState } from "react";

export default function CaseText({ title, description, listTitle, listItems}) {
  const [updatedDescription, setUpdatedDescription] = useState(['']);
  const [updatedListTitle, setUpdatedListTitle] = useState('');
  const [updatedListItems, setUpdatedListItems] = useState('');

  useEffect(() => {
    if (description) {
      setUpdatedDescription(() => {
        return (
          description.map((item) => (
            <p key={crypto.randomUUID()} className="pb-2" style={{fontFamily: 'Plex-regular', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
              {item}
            </p>
          ))

        )
      })
    }
    if (listTitle) {
      setUpdatedListTitle(() => {
        return (
          <p  key={crypto.randomUUID()} className="" style={{fontFamily: 'Plex-semibold', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
            {listTitle}
          </p>
        )
      })
    }
    if (listItems) {
      setUpdatedListItems(() => {
        return (
          <p className="" style={{fontFamily: 'Plex-regular', color: '#black', lineHeight: '20px', fontSize: '16px',}}>
            {listItems.map((item) => (
              <li  key={crypto.randomUUID()} style={{ marginBottom: '7px', listStylePosition: 'inside'}}>{item}</li>
            ))}
          </p>
        )
      })
    }
  }, [])

//   ul {
//   width: 16rem;
//   border: 1px solid;
//   list-style-type: none; /* removes the original bullets */
//   padding: 0;
// }

// li {
//   overflow-wrap: break-word;
//   line-height: 1.2rem; /* Should be the same as in li::before */
// }

// li::before {
//   content: '•';
//   line-height: 1.2rem; /* Should be the same as in li */
//   font-size: 1.2rem; /* Should be the same as the line-height */
//   vertical-align: top;
//   margin-right: 0.6rem; /* Change this to your liking 
// }

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
              {updatedDescription}
              {updatedListTitle}
              {updatedListItems}
            </div>
          </div>
        </div>
      </div>    
    </>
  );
}