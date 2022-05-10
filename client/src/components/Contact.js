import React from 'react';


const FeaturedProducts = ({children}) => {
  return (

    <div className='contact'>
<h1>Contact us</h1>
<h2>Inquiries? Please fill out your personal information and your question here and we'll get back to you ASAP.</h2>
<form action="submit" className='contact-form'>
     <section>
    <label htmlFor="name">Name:</label>
    <input type="text" id='name'className='form-input'/>
</section>
  <section>
    <label htmlFor="email">E-mail:</label>
    <input type="text" id='email' className='form-input'/>
</section>
  <section>
        <label htmlFor="message">Reason for contacting:</label>
    <input type="text" id='message'className='form-input'/>
</section>
<section>
   <label htmlFor="button"></label>
<button class="default-button" type="submit">Submit</button>
</section>
</form>
    </div>
  );
};

export default FeaturedProducts;
