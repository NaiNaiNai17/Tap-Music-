window.addEventListener('load', () => {
    const audio = document.querySelectorAll(".audio");
    const pads = document.querySelectorAll(".pads div");

    //lets add sound
    console.log(audio[0]);
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            audio[index].currentTime = 0;
            audio[index].play();
        });
    });
});