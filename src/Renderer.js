import * as THREE from 'three';

const Renderer = () => {
  const container = document.getElementById('root');
  const rendererSettings = {
    width: 850,
    height: 850,
    antialias: true,
    alpha: true,
    responsive: [
      { size: 1440, width: 700, height: 700 },
      { size: 1280, width: 600, height: 600 },
      { size: 1152, width: 500, height: 500 },
      { size: 1024, width: 450, height: 500, portrait: 780 },
      { size: 768, width: 550, height: 550 },
      { size: 480, width: 420, height: 420 },
      { size: 375, width: 320, height: 320 },
    ]
  }
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.outputEncoding = THREE.sRGBEncoding;
  this.setEvents()


  function setEvents() {
		renderer.domElement.addEventListener('mousemove', onMouseMove, false);
		renderer.domElement.addEventListener('click', onClick, false);

		renderer.domElement.addEventListener('touchstart', function (e) {
			// console.log('touchstart');
			// console.log(e);
			cameraMoves = false;
		}, false);

		renderer.domElement.addEventListener('touchmove', function (e) {
			// console.log('touchmove');
			// console.log(e);
			cameraMoves = true;
		}, false);

		renderer.domElement.addEventListener('touchend', function (e) {
			// console.log('touchend');
			// console.log(e);
			onMouseMove(e);
			onClick(e);
		}, false);

		controls.addEventListener('start', function (e) {

			cameraMoves = true;

			if (getIntersects().length > 0) {
				objectClicked = getIntersects()[0].object.name;
			}

			// console.log('controls.start');
			// console.log('objectClicked', objectClicked);
			// console.log('e', e);

		}, false);

		controls.addEventListener('change', function () {
			// console.log('controls.change');
		}, false);

		controls.addEventListener('end', function (e) {

			if (getIntersects().length > 0 && objectClicked == getIntersects()[0].object.name) {
				cameraMoves = false;
			}

			// console.log('controls.end');
		}, false);

		window.addEventListener('resize', function (e) {
			// console.log('resized!!');

			setCanvasSize();
		}, false);
	}

	setCanvasStyles = () => {
		// set canvas bg
		let canvas_bg = document.createElement('div');
		canvas_bg.style.width = '99.4%';
		canvas_bg.style.height = '99.4%';
		canvas_bg.style.position = 'absolute';
		canvas_bg.style.top = '50%';
		canvas_bg.style.left = '50%';
		canvas_bg.style.zIndex = '1';
		canvas_bg.style.transform = 'translate(-50%,-50%)';
		canvas_bg.style.borderRadius = '100%';
		canvas_bg.style.background = '#fff';
		container.appendChild(canvas_bg);

		// container
		container.style.borderRadius = '100%';
		container.style.overflow = 'hidden';
		// container.style.marginTop = -(jQuery('.footer-home').height() / 2) + 'px';

		// canvas
		renderer.domElement.style.zIndex = '2';
		renderer.domElement.style.position = 'relative';
	}

	calcRelativeSize = () => {
		rendererSettings.sizeRatio = rendererSettings.width / 1920;

		for (const res of rendererSettings.responsive) {
			res.ratio = res.width / res.size;
		}
	}

	setCanvasSize = () => {
		// get responsive sizes
		let sizes = rendererSettings.responsive;
		// get default size
		let theSize = {
			screen: 'default',
			width: window.innerWidth * rendererSettings.sizeRatio,
			height: window.innerWidth * rendererSettings.sizeRatio,
		};
		let rightOffset;
		let footerSize = document.querySelector('.footer-home').getBoundingClientRect();

		// reset inline style properties
		container.style.removeProperty('right');
		container.style.removeProperty('margin-top');

		// get the most relevant size
		for (const size of sizes) {
			if (window.innerWidth <= size.size) {
				theSize = {
					screen: size.size,
					width: window.innerWidth * size.ratio,
					height: window.innerWidth * size.ratio,
				};

				if (screenOrientation() == 'portrait' && size.portrait) {
					theSize.width = theSize.height = window.innerWidth * (size.portrait / size.size);
				}

				// set the ball to 90% of original size if height less then 670
				if ( screenOrientation() == 'portrait' && window.innerHeight < 670 ) {
					
					theSize.width = theSize.height = window.innerWidth * ( (size.width * 0.9) / size.size);

					if ( size.portrait ) {
						theSize.width = theSize.height = window.innerWidth * ( (size.portrait * 0.9) / size.size);
					}
				}
			}
		}

		// dynamic height calculation
		if (window.innerHeight < (theSize.height + footerSize.height)) {
			theSize.height = window.innerHeight - footerSize.height - 40;
			theSize.width = theSize.height;

			rightOffset = ((window.innerWidth * 0.6) - theSize.width) / 2;

			// container.style.right = rightOffset + 'px';

			// console.log('window.innerHeight', window.innerHeight);
			// console.log('rightOffset', rightOffset);
			// console.log('container.getBoundingClientRect()', container.getBoundingClientRect());
			// console.log('footer-home height', document.querySelector('.footer-home').getBoundingClientRect());
		}

		// console.log('theSize', theSize);
		// console.log('window.devicePixelRatio', window.devicePixelRatio);

		// canvas container
		container.style.width = theSize.width + 'px';
		container.style.height = theSize.height + 'px';

		if (theSize.screen > 1024 && screenOrientation() == 'landscape') {
			container.style.marginTop = -(footerSize.height / 2) + 'px';
		}

		// canvas
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(theSize.width, theSize.height);
	}

	screenOrientation = () => {
		return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
	}

	render = () => {

		if (settings.showStats) stats.update();

		controls.update();
		renderer.render(scene, camera);
	}
  return renderer ? <primitive object={renderer} /> : null
}
  
export default Renderer;