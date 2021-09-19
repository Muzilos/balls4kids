import { useState } from "react"
import { PayPalButton } from "react-paypal-button-v2"

export default function PayPalComponent() {
    const [data, setData] = useState({
        amount: "15.00",
    });
    const PAYPAL_CLIENT_ID="AX4vxvtfI-I6sHrkIOLbcqML4cvCvVCGdJiF0CyBBZUeZgjURMaXi-GponmKDwj9IBLezFEIJEwAFGyx";
    const {amount} = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
    }
    return (
        <>
        Donation amount: $<input 
            class="form-text"
            type="number"
            step="0.01"
            name="amount"
            value={amount}
            onChange={handleChange} 
        /> <br/><br/>
        <PayPalButton
            amount={amount}
            shippingPreference="NO_SHIPPING"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);
            }}
            options={{
                clientId: "AX4vxvtfI-I6sHrkIOLbcqML4cvCvVCGdJiF0CyBBZUeZgjURMaXi-GponmKDwj9IBLezFEIJEwAFGyx"
            }}
        />
        </>
    );
}