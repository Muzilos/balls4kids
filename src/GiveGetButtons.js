// import LinkButton from './components/LinkButton'

import { Link } from "react-router-dom";

export const GiveButton = (() => {
    const button = (
        <Link to="/donate">
            <div id="give">
                <button class='giveget'>
                    <h1 class='top-right'>GIVE <br/>⚽</h1>
                </button>
            </div>
        </Link>
    )
    return button;
});

export const GetButton = (() => {
    const button = (
        <Link to="/get">
            <div id="get">
                <button class='giveget'>
                    <h1 class='top-left'>GET <br/>⚽</h1>
                </button>
            </div>
        </Link>
    )
    return button;
});
