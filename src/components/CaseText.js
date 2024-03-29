import { useEffect, useState } from 'react';
import styles from '@/styles/CaseText.module.css';
import { v4 as randomUUID } from 'uuid';

export default function CaseText({ title, description, listTitle, listItems }) {
  const [updatedDescription, setUpdatedDescription] = useState(['']);
  const [updatedListTitle, setUpdatedListTitle] = useState('');
  const [updatedListItems, setUpdatedListItems] = useState('');

  useEffect(() => {
    if (description) {
      setUpdatedDescription(() => {
        return description.map((item) => (
          <p
            key={randomUUID()}
            className=''
            style={{
              fontFamily: 'Plex-regular',
              color: '#black',
              lineHeight: '28px',
              fontSize: '18px',
            }}
          >
            {item}
          </p>
        ));
      });
    }
    if (listTitle) {
      setUpdatedListTitle(() => {
        return (
          <p
            key={randomUUID()}
            className=''
            style={{
              fontFamily: 'Plex-semibold',
              color: '#black',
              lineHeight: '28px',
              fontSize: '18px',
            }}
          >
            {listTitle}
          </p>
        );
      });
    }
    if (listItems) {
      setUpdatedListItems(() => {
        return (
          <p
            className={styles.listContainer}
            style={{
              fontFamily: 'Plex-regular',
              color: '#black',
              lineHeight: '28px',
              fontSize: '18px',
            }}
          >
            {listItems.map((item) => (
              <li
                key={randomUUID()}
                className={styles.specialListItem}
                style={{
                  marginBottom: '7px',
                  listStylePosition: 'inside',
                  lineHeight: '28px',
                }}
              >
                {item}
              </li>
            ))}
          </p>
        );
      });
    }
  }, []);

  return (
    <>
      <div className='' style={{ background: 'white', height: '50px' }} />

      <div style={{ backgroundColor: 'white' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <h1
                className=''
                style={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  fontFamily: 'Plex-semibold',
                }}
              >
                {title}
              </h1>
            </div>
            <div className='col-lg-8  d-lg-block'>
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
