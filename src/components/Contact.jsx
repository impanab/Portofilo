import React, { useState } from 'react';
import axios from 'axios';
import Icons from './Icons';
import './css/Contact.css';
import PopupMsg from './PopupMsg';
import NavIcons from './NavIcons';

function Contact() {
  const [details, setDetails] = useState({ name: '', email: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!details.name || !details.email || !details.message) {
      setErrorMsg('Fill all the fields!');
      openPopup();
      return;
    }
    if (!emailRegex.test(details.email)) {
      setErrorMsg('Invalid email');
      openPopup();
      return;
    }
    try {
      await axios.post("http://localhost:5000/submit-form", details);
      // await axios.post('http://localhost:5000/submit-form',details)
      setDetails({ name: '', email: '', message: '' });
      setErrorMsg('Submitted successfully!');
      openPopup();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
 <>
    <div className='contact-sec' id='contact'>
      <PopupMsg isOpen={isOpen} closePopup={closePopup} msg={errorMsg} style={errorMsg!=='Submitted successfully!' ? 'alert' : 'popup'} />
      <section className='contact-det'>
        <h1 className='heading'>Contact Me</h1>
        <Icons />
      </section>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Your Name' value={details.name} onChange={handleChange} />
        <input type='text' name='email' placeholder='Your Email' value={details.email} onChange={handleChange} />
        <textarea name='message' placeholder='Your Message' value={details.message} onChange={handleChange} />
        <button type='submit'>SUBMIT</button>
      </form>
      <NavIcons/>
    </div>
    
 </>
  );
}

export default Contact;
