export default function WorkCard (props) {
  return (
    <>
      <div className={`pt-5 d-flex flex-column align-items-center`}>
        <div className={`d-flex flex-column align-items-center justify-content-center`}>
          <img src={props.image} className="img-fluid"></img>
        </div>
        <div className={`w-100 pt-3 pb-3`}>{props.summary}</div>
        <div className={`w-100`} style={{fontSize: '1.5rem', lineHeight: '2rem'}}>{props.headline}</div>
        <div className={`mt-auto w-100 pt-4`}>
          <a className={`link-secondary`} href={props.link}>
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
