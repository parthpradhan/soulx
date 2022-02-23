import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm(
      "service_fxwozhg","template_dvtrmwq",
      e.target,
      "user_5wahDSklEwrDVACdD5MF7"
    ).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="text" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
