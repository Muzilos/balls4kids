import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
	const imagePath = '/B4K.png'
	const headerLogo = (
		<Link to="/">
		<div id="header-logo">
            <img id='B4KLogo' src={imagePath}/>
		</div>
		</Link>
	)
	return headerLogo
}

export const HeaderLogoLeft = () => {
	const imagePath = '/B4K.png'
	const headerLogo = (
		<Link to="/">
			<div id="header-logo-left">
            	<img id='B4KLogoPage' src={imagePath}/>
			</div>	
		</Link>
	)
	return headerLogo
}