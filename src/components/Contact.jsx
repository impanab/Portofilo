import React, { useState } from 'react'
import axios from 'axios'
import Icons from './Icons'
import './css/Contact.css'
import PopupMsg from './PopupMsg'


function Contact() {
let [details,setdetails]=useState({name:'',email:'',message:''})
const [isOpen, setIsOpen] = useState(false);
const [toggle,settoggle]=useState(false);
let [email,setemail]=useState(false)
const openPopup = () => setIsOpen(true);
const closePopup= () => setIsOpen(false);


let updateDetails=(e)=>{
    setdetails({...details,[e.target.name]:e.target.value})
}

const sumbitForm = async (e) => {
  e.preventDefault();
  let Isvalid=(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
  if(details.name&&details.email&&details.message){
   if(Isvalid){
    setemail(false)
    settoggle(false)
    try {
      await axios.post("http://localhost:5000/submit-form", details);
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
   } else{
    setemail(true)
   }
  } else {
    settoggle(true)
  }
  //  setdetails({name:'',email:'',message:''})
};
// useEffect(()=>{
//   setTimeout(closePopup,6000)
// },[isOpen])

  return (
    <div className='contact-sec'>
       <PopupMsg isOpen={isOpen}  closePopup={closePopup} msg={toggle?(email?'Invalid email':'Fill all the fields!'):'Submitted successfully !'} style={toggle?'alert':'popup'}/>
      <section className='contact-det' >
        <h1 className='heading'>Contact Me</h1>
        <Icons/>
      </section>
         <form onSubmit={sumbitForm}>
        <input type='text' name='name' placeholder='Your Name' onChange={updateDetails}/>
        <input type='text' name='email' placeholder='Your Email' onChange={updateDetails}/>
        <textarea  name='message' placeholder='Your Message' onChange={updateDetails}/>
        <button type='submit' onClick={openPopup}>SUBMIT</button>
      </form>
    </div>
   
  )
}

export default Contact