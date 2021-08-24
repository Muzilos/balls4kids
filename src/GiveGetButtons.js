export const GiveButton = (() => {
    const button = (
        <div id="give">
            <button class='giveget' onClick={console.log('GIVE A BALL')}>
                <h1 class="rotate-right">Give a Ball</h1>
            </button>
        </div>
    )
    return button;
});

export const GetButton = (() => {
    const button = (
        <div id="get">
            <button class='giveget' onClick={console.log('GET A BALL!')}>
                <h1 class="rotate-left">Get a Ball</h1>
            </button>
        </div>
    )
    return button;
});
