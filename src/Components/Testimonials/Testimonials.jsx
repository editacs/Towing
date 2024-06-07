import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sara M.</h3>
                            <span>Roadside Assistance</span>
                        </div>
                    </div>
                    <p>TowTech came to my rescue when I was stranded with a flat tire in the middle of nowhere. Their response time was impressive, and the service was top-notch. Highly recommend!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Michael L.</h3>
                            <span>Commercial Towing</span>
                        </div>
                    </div>
                    <p>I can't thank TowTech enough for their help after my car broke down on the highway. The driver was friendly, professional, and got me safely to the nearest repair shop in no time.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Emily B.</h3>
                            <span>Accident Towing</span>
                        </div>
                    </div>
                    <p>Five stars! They towed my car after an accident, and the whole process was smooth and hassle-free. The team was efficient and handled everything with care. Definitely my go-to towing service from now on.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Jason H.</h3>
                            <span>Roadside Assistance</span>
                        </div>
                    </div>
                    <p>Prompt, reliable, and affordable! That's how I would describe TowTech. They rescued me when my car wouldn't start, and I was back on the road in no time. Thank you for the excellent service!</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
