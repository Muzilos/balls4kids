import '../App.css';
import { HeaderLogoLeft } from '../Logo';
// import LinkButton from './components/LinkButton';
import {withRouter} from 'react-router-dom';
import PayPalComponent from '../components/PayPalComponent';

function Donate() {
  return (
    <>
        <div id="about-header">
            <HeaderLogoLeft /></div>
        <br/><br/>
        <div id="about-content" class="paypal-component">
          <h3 align="left"><b>Donate $15 to give a ball!</b></h3> <br/>
          <PayPalComponent />
        </div>
    </>
  );
}

// export default Contact;
const donateClassWithHistory = withRouter(Donate);
export {donateClassWithHistory as DonatePage};
export {Donate};