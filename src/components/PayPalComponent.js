import { Component } from "react"
import { PayPalButton } from "react-paypal-button-v2"

export default class PayPalComponent extends Component {
    render() {
        return (
            <PayPalButton
                amount="15.00"
                shippingPreference="NO_SHIPPING"
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);
                }}
                // options={{
                //     clientId: "sb"
                // }}
            />
        )
    }
}