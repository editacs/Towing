import React from 'react';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-icon-2.png'; // Ensure this path is correct
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png.jpg'; // Ensure this path is correct
import program_icon_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="Program 1" />
        <div className="caption">
          <img src={program_icon_1} alt="Icon 1" />
          <p>Roadside Assistance</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Program 2" />
        <div className="caption">
          <img src={program_icon_2} alt="Icon 2" />
          <p>Exotic Towing</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="Program 3" />
        <div className="caption">
          <img src={program_icon_3} alt="Icon 3" />
          <p>Accident Towing</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
