import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({children}) => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current)
      emailjs.sendForm(
        'service_7ugyzgd',
        'template_u8jvcfm',
        form.current,
        'CNPOcX_lOqJC8MPax')
        .then(result => {
          console.log(result)
        }).catch(err => console.log(err))
    }

  return (
    <>
    <div className='contact'>
<h1>Contact us</h1>
<h2>Inquiries? Please fill out your personal information and your question here and we'll get back to you ASAP.</h2>
<form ref={form} className='contact'action="submit">
     <section>
    <label htmlFor="name">Name</label>
    <input type="text" id='name' name="user_name"/>
       <label htmlFor="name" >E-mail address</label>
       <input type="text"  id='email' name="user_email" />
       <label htmlFor="name"  name='message'>Reason for contacting:</label>
    <textarea  rows="10" id='message' name="message"/>
    <button action='submit' onClick={handleSubmit}>Submit</button>
    </section>
</form>
</div>

<div className='hidden'></div>
</>
  );
};

export default Contact;


