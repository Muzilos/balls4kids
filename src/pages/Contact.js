import '../App.css';
import { useState } from 'react';
import { HeaderLogo, HeaderLogoLeft } from '../Logo';
import { GoogleSpreadsheet } from "google-spreadsheet";
import {withRouter} from 'react-router-dom';

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const {name, email, phone, message} = data;
  // Config variables
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = 0;
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_PRIVATE_KEY;
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
  
      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let newRow = { Name: name, Email: email, Phone: phone, Message: message, Timestamp: new Date().toLocaleString() };
      appendSpreadsheet(newRow);
      alert("Form data submitted! We will read your message shortly")
      setData({ ...data, name: "", email: "", phone: "", message: ""});
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
        <div id="about-header">
            <HeaderLogo /></div>
        <br/><br/>
        <div id="about-content">            
        <b>Contact:</b> <a href="Balls4KidsCharity@gmail.com">balls4kidscharity@gmail.com </a><br/>
        <b>Instagram:</b> <a href="https://www.instagram.com/balls4kids/">@balls4kids</a> 
        <br/><br/><br/>
          <form onSubmit={handleSubmit}>
            <label>
              Name: 
              <input 
                class="form-text"
                type="text"
                name="name"
                value={name}
                onChange={handleChange} 
              /> <br/>
              Email: 
              <input 
                class="form-text" 
                type="text" 
                name="email" 
                value={email}
                onChange={handleChange} 
              /> <br/>
              Phone: 
              <input 
                class="form-text" 
                type="text" 
                name="phone" 
                value={phone}
                onChange={handleChange} 
              /> <br/>
              Message: <br/> 
              <textarea 
                id="message-box" 
                rows="5" 
                cols="35" 
                name="message"
                value={message}
                onChange={handleChange} 
              > </textarea> <br />
              <input type="submit" value="Submit" onClick={console.log("SubMIT")}/>
            </label>
            <br/><br/><br/>
            <p id="#disclaimer">
              Note: All information is confidential and will not be shared or sold to any 3rd parties.
            </p>
          </form>
        </div>
    </>
  );
}

// export default Contact;
const contactClassWithHistory = withRouter(Contact);
export {contactClassWithHistory as ContactPage};
export {Contact};