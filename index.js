DING_AT = 75
LINE_SIZE = 85;

SOUNDS = {
    COUNT: 0,
};

function play(sound) {
    SOUNDS[sound][SOUNDS.COUNT++ % SOUNDS[sound].length].play();
}

function letterPressed(ev) {
    key = ev.key;
    const tw = $(".typewriter");
    if (ev.key == "Delete" || ev.key == "Backspace") {
        const old = tw.text();
        tw.text(old.slice(0, -1));
        console.log(old);
        play("clack")
    } else if (ev.key == "Enter") {
        $(".typewriter").append("\n");
        play("slide");
    } else if (ev.key.length > 1) {
        console.log(`${ev.key} pressed, ignoring`);
    } else {
        const lineLength = tw.text().split("\n").slice(-1)[0].length;
        if (lineLength == DING_AT) {
            $(".typewriter").append(ev.key);
            play("ding");
        } else if (lineLength < LINE_SIZE) {
            $(".typewriter").append(ev.key);
            play("clack");
        } else {
        }
    }
}

$(document).ready((ev) => {
    document.addEventListener('keydown', letterPressed, false);

    SOUNDS["clack"] = [
        new Audio("audio/clack1.mp3"),
        new Audio("audio/clack2.mp3"),
        new Audio("audio/clack3.mp3"),
        new Audio("audio/clack1.mp3"),
        new Audio("audio/clack2.mp3"),
        new Audio("audio/clack3.mp3"),
    ]
    SOUNDS["slide"] = [
        new Audio("audio/slide.mp3"),
        new Audio("audio/slide.mp3"),
        new Audio("audio/slide.mp3"),
        new Audio("audio/slide.mp3"),
        new Audio("audio/slide.mp3"),
    ]
    SOUNDS["ding"] = [
        new Audio("audio/ding.mp3"),
        new Audio("audio/ding.mp3"),
    ]
});
