import { useState, useEffect, useRef } from "react";

export const HeaderLogo = () => {
	const imagePath = '/B4K.png'
	const headerLogo = (
		<div id="header-logo">
            <img id='B4KLogo' src={imagePath}/>
		</div>
	)
	return headerLogo
}
