import { Link } from "react-router-dom";

export const AboutButton = (() => {
    const button = (
        <Link to="/about">
            <div id="about">
                <button class='aboutcontact' onClick={console.log('ABOUT')}>
                    <h1 class='bottom-left'>ABOUT</h1>
                </button>
            </div>
        </Link>
    )
    return button;
});

export const ContactButton = (() => {
    const button = (
        <Link to="/contact">
            <div id="contact">
                <button class='aboutcontact' onClick={console.log('CONTACT')}>
                    <h1 class='bottom-right'>CONTACT</h1>
                </button>
            </div>
        </Link>
    )
    return button;
});
