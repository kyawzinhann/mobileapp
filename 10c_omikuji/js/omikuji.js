"use strict";
let n = "";
let nBefore = "";
window.addEventListener("DOMContentLoaded",
    function () {

        $("header").textillate({
            loop: false,
            minDisplayTime: 2000,
            initialDelay: 2000,
            autoStart: true,
            in: {
                effect: "fadeInLeftBig",
                delayScale: 1.5,
                delay: 50,
                sync: false,
                shuffle: true
            }
        });

        $(function () {
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });
        this.setTimeout(
            function () {

                let popMessage = "いらっしゃい！おみくじ引いてって～"
                this.window.alert(popMessage);
            },
            "5000"
        )
    }, false
);
let soundEndflag = "0";
//omikuji button 1
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");

btn1.addEventListener("click",
    function () {
        //sound countrol
        if (soundEndflag === "1") {
            soundControl("end", "");
        }

        btn1.style.transition = "1s";
        let resultText = [
            "image/daikichi.png",
            "image/chukichi.png",
            "image/syokichi.png",
            "image/suekichi.png",
            "image/daikyo.png"

        ];
        // let n=Math.floor(Math.random() * resultText.length);
        while (n === nBefore) {
            n = Math.floor(Math.random() * resultText.length);
        }
        nBefore = n;

        let resultMaxSpeed = [10, 10, 8, 5, 5];
        let resultMaxSize = [30, 30, 30, 40, 30];
        let resultImage = [
            "image/star.png",
            "image/sakura_hanabira.png",
            "image/water1.png",
            "image/redLeaves4.png",
            "image/snowflakes.png"
        ];
        let resultSound = [
            "sound/omikuji_sound1.mp3",
            "sound/omikuji_sound2.mp3",
            "sound/omikuji_sound3.mp3",
            "sound/omikuji_sound4.mp3",
            "sound/omikuji_sound5.mp3",

        ];
        // let n = Math.floor(Math.random() * resultText.length);
        omikujiTextImage.src = resultText[n];
        omikujiTextImage.classList.add("omikujiPaper");

        omikujiTextImage.addEventListener("animationend",
            function () {
                omikujiTextImage.classList.remove("omikujiPaper");
            }, false
        );


        // sound control
        w_sound = resultSound[n];
        soundControl("start", w_sound);
        soundEndflag = "1";

        // snowfall stop
        $(document).snowfall("clear");
        // jQueryのsnowfall
        $(document).ready(function () {
            $(document).snowfall({
                maxSpeed: resultMaxSpeed[n],
                minSpeed: 1,
                maxSize: resultMaxSize[n],
                minSize: 1,
                image: resultImage[n]


            });
        });

    }, false
);
// sound control
let w_sound
let music
function soundControl(status, w_sound) {
    if (status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if (status === "end") {
        music.pause();
        music.currentTime = "0";
    }

}
