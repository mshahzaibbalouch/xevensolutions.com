import React from 'react'
import ContactHeader from '../component/ContactHeader';
import FormValidetion from '../component/FormValidetion';
import QUESTIONS from '../component/QUESTIONS';
import Social_Media from '../component/Social_Media';

function Contact() {
  return (
    <div>
      <ContactHeader/>
      <FormValidetion/>
      <QUESTIONS/>
      <Social_Media/>
    </div>
  )
}

export default Contact;