import React from 'react';
import { Helmet } from 'react-helmet';  // Ensure Helmet is imported
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      <Helmet>
        <title>{title} - Tow Tech Solutions</title>  // Dynamically set the document title
      </Helmet>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
