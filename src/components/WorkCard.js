import Link from 'next/link';

export default function WorkCard (props) {
  return (
    <>
          <Link className={`link-secondary`} style={{textDecoration: 'none', color: 'white'}} href={props.link}>
      <div className={`mt-5 d-flex flex-column align-items-center`}>
        <div className={`d-flex flex-column align-items-center justify-content-center`}>
          <img src={props.image} className="img-fluid"></img>
        </div>
        <div className={`w-100 pt-3 pb-3`} style={{color: 'white'}}>{props.summary}</div>
        <div className={`w-100`} style={{fontSize: '1.5rem', lineHeight: '2rem', color: 'white'}}>{props.headline}</div>
        <div className={`mt-auto w-100 pt-4`} style={{color: 'white', textDecoration: 'underline'}}>
            Read More
        </div>
      </div>
          </Link>
    </>
  );
}
