import '../App.css';
import { HeaderLogoLeft } from '../Logo';
// import LinkButton from './components/LinkButton';
import {withRouter} from 'react-router-dom';
import PayPalComponent from '../components/PayPalComponent';
import { useState } from 'react';

function Donate() {
  const image1Path = '/kidWball.jpg'
  return (
    <>
        <div id="about-header">
            <HeaderLogoLeft /></div>
        <br/><br/>
        <div id="about-content" class="paypal-component">
        <div class="about-section-1">
          <img id="kid-with-ball" src={image1Path} ></img>
          <h3 align="left"><b>Would you like to sponsor a ball? <br/>We are currently sourcing balls at $15. Every dollar counts and 100% of donations go to the kids. Already have a ball or equipment you’d like to donate? Go to the Contact page and send us a message, we are happy to receive your donations in the mail.<br/>THANK YOU!</b></h3> <br/>
        </div>
          <PayPalComponent />
        </div>
    </>
  );
}

// export default Contact;
const donateClassWithHistory = withRouter(Donate);
export {donateClassWithHistory as DonatePage};
export {Donate};