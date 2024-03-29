let gauges = document.getElementsByClassName("gauge-inner")
let aboutButton = document.getElementById("about-button")

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        for (let i = 0; i < gauges.length; i++) {
            const gauge = gauges[i];
            let percentage = Number(gauge.dataset["fill"])
            gauge.style.width = percentage + "%"
        }
    }, 150);
})


function textCorrupt(domElement) {
    const originalText = domElement.textContent.trim();

    let currentIndex = 0;
    const corruptText = () => {
        const textArray = originalText.split('');

        while (currentIndex < textArray.length && textArray[currentIndex] === ' ') {
            currentIndex++;
        }

        if (currentIndex >= textArray.length) {
            clearInterval(corruptInterval);
            domElement.textContent = originalText;
        } else {
            textArray[currentIndex] = getRandomChar();
            domElement.textContent = textArray.join('');
            currentIndex++;
        }
    };

    const getRandomChar = () => {
        const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        return possibleChars.charAt(randomIndex);
    };

    const corruptInterval = setInterval(corruptText, 100);
}
function preloadPage(targetPage) {
    const preloader = document.createElement('iframe');
    preloader.style.display = 'none';
    preloader.src = targetPage;
    document.body.appendChild(preloader);
  }


// aboutButton.addEventListener("click", (ME) => {
//     ME.preventDefault()
//     let blur = document.createElement("div")
//     blur.style.zIndex = "100"
//     blur.style.position = "absolute"
//     blur.style.inset = "0px"
//     blur.style.animation = "backdrop-blur 1s linear 0s 1 normal forwards, background-black 1s linear 500ms 1 normal forwards"
//     document.body.appendChild(blur)
//     document.title = "Lorenzo Azzopardi - about"
//     preloadPage("./about")
//     setTimeout(() => {
//         location = "./about"
//     }, 2000);
// })