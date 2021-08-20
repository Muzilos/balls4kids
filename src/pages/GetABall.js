import '../App.css';
import { useState } from 'react';
import { HeaderLogoLeft } from '../Logo';
import { GoogleSpreadsheet } from "google-spreadsheet";
import {withRouter} from 'react-router-dom';

function GetABall() {
  const [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    info: ""
  });
  const {name, address, email, phone, info} = data;
  // Config variables
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = 1254958875;
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
      let newRow = { Name: name, Address: address, Email: email, 
        Phone: phone, Info: info, Timestamp: new Date().toLocaleString() };
      appendSpreadsheet(newRow);
      alert("Ball Requested\nWe will reach out to you shortly!")
      setData({ ...data, name: "", address: "", email: "", phone: "", info: ""});
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
        <div id="about-header">
            <HeaderLogoLeft /></div>
        <br/><br/>
        <div id="about-content">            
        <b>Contact:</b> <a href="Balls4KidsCharity@gmail.com">balls4kidscharity@gmail.com </a><br/>
        <b>Instagram:</b> <a href="https://www.instagram.com/balls4kids/">@balls4kids</a> 
        <br/><br/><br/>
        <h2>Sign up to get a ball!</h2><br/>
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
              Address:
              <input 
                class="form-text" 
                type="text" 
                name="address" 
                value={address}
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
              Tell us a little about yourself! <br/> 
              <textarea 
                id="message-box" 
                rows="5" 
                cols="35" 
                name="info"
                value={info}
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
const getABallClassWithHistory = withRouter(GetABall);
export {getABallClassWithHistory as GetABallPage};
export {GetABall};