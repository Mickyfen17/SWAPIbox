import React from 'react';

const OpeningHeader = ({ opening_crawl, title, release_date }) => {

  return(
    <section className='opening-header'>
      <h1>SWAPIbox</h1>
      <p>{ opening_crawl }</p>
      <h3>{ title }</h3>
      <h4>{ release_date }</h4>
    </section>
  )
}

export default OpeningHeader;
