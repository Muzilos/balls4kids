import { useState, useEffect, useRef } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const FieldVideo = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()); 
	const className = (windowDimensions.width>windowDimensions.height) ? "video-horizontal":"video-vertical";
	const vid = {
		src: (windowDimensions.width>windowDimensions.height) ? "/field.mp4":"/field-vertical.mp4",
		crossOrigin: "Anonymous",
		loop: true,
		muted: true,
		playsInline: true
	}
	const imagePath = '/B4K - With Circle.png'
	const videoElement = (
		<div class={className}>
			<video id="video" src={vid.src} crossOrigin={vid.crossOrigin} loop
				muted={vid.muted} playsInline={vid.playsInline} autoPlay> 
			</video>
			<div id='center-logo'>
				<img id='B4KCircle' src={imagePath}/>
			</div>
		</div>
	)
	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return videoElement
}
