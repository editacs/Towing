import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setResult("Sending...");

        // Using EmailJS to send the data
        emailjs.sendForm('service_kez9q9k', 'template_oyw4q4e', event.target, 'NCkrN1SODXOAEiFwN')
            .then((response) => {
                console.log("Success", response.text);
                setResult("Message sent successfully!");
                event.target.reset();  // Reset the form after successful submission
            }, (error) => {
                console.log("Error", error.text);
                setResult("Failed to send message.");
            });
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
                <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.</p>
                <ul>
                    <li><img src={mail_icon} alt="Mail Icon" />towtechsolutionsinc@gmail.com</li>
                    <li><img src={phone_icon} alt="Phone Icon" />(818) 738-8664</li>
                    <li><img src={location_icon} alt="Location Icon" /> Los Angeles, CA , United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="Submit Arrow" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;
