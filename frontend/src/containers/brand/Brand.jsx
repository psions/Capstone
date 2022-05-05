import React from 'react';
import { google, playstation, xbox, dropbox, atlassian} from './imports'
import './brand.css';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>  
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={playstation} alt="google" />
      </div>
      {/* <div>
        <img src={xbox} alt="google" />
      </div> */}
      <div>
        <img src={dropbox} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
    </div>
  )
}

export default Brand