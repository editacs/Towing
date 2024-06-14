import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';
import img_6013 from '../../assets/IMG_6013.jpg';
import img_6517 from '../../assets/IMG_6517.jpg';
import img_6115 from '../../assets/IMG_6115.jpg';
import img_6119 from '../../assets/IMG_6119.jpg';
import img_6128 from '../../assets/IMG_6128.jpg';
import img_6146 from '../../assets/IMG_6146.jpg';
import img_6168 from '../../assets/IMG_6168.jpg';
import img_6365 from '../../assets/IMG_6365.jpg';
import img_6658 from '../../assets/IMG_6658.jpg';

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>
      <a href="#picture-section" className='btn dark-btn'>See more here <img src={white_arrow} alt="Arrow" /></a>

      <div id="picture-section" className="picture-section">
        <h2>More Pictures</h2>
        <img src={img_6013} alt="IMG 6013" />
        <img src={img_6517} alt="IMG 6517" />
        <img src={img_6115} alt="IMG 6115" />
        <img src={img_6119} alt="IMG 6119" />
        <img src={img_6128} alt="IMG 6128" />
        <img src={img_6146} alt="IMG 6146" />
        <img src={img_6168} alt="IMG 6168" />
        <img src={img_6365} alt="IMG 6365" />
        <img src={img_6658} alt="IMG 6658" />
      </div>
    </div>
  );
}

export default Campus;
