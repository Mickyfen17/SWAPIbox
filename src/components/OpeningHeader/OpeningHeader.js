import React from 'react';
import './OpeningHeader.css';

const OpeningHeader = ({ opening_crawl, title, release_date }) => {

  return(
    <section className='opening-header'>
      <div>
        <p>{ opening_crawl }</p>
        <h3>{ title }</h3>
        <h4>{ release_date }</h4>
      </div>
    </section>
  )
}

export default OpeningHeader;
