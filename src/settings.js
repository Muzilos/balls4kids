const settings = {
    dom: {
        textCanvas: {
            size: 512,
            lineHeight: 38,
            padding: 90,
            maxLength: 70,
            font: {
                style: '',
                variant: '',
                weight: '',
                size: '32px',
                family: 'Arial'
            }
        }
    },
    showStats: false,
    camera: {
        pov: 1,
        ratio: 1,
        near: 0.1,
        far: 115,
        position: {
            z: 115,
        }
    },
    renderer: {
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
            // {size: 600, width: 350, height: 350},
            // {size: 480, width: 300, height: 300},
        ]
    },
    colors: {
        default: 0xffffff,
        hover: 0x0f1a84,
    },
    controls: {
        autoRotate: true,
        autoRotateSpeed: 0.5, // negative rotate left, positive rotate right
        disableVerticalRotation: true,
        enableDamping: true,
        enableZoom: false,
        enablePan: false
    },
    animation: {
        // if set to true will reduce the device fps by half
        reduceFPS: false,
        // if set to true will limit fps to specific value, reduceFPS will be ignored
        byFPS: false,
        fpsLimit: 20,
        fpsAutoRotateSpeed: 2
    }
}
export default settings;