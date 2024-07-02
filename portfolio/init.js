let gauges = document.getElementsByClassName("gauge-inner")
let corrupt = document.getElementsByClassName("corrupt")
let aboutButton = document.getElementById("about-button")

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < gauges.length; i++) {
        const gauge = gauges[i];
        observer.observe(gauge);
    }
    for (let i = 0; i < corrupt.length; i++) {
        const c = corrupt[i];
        observer.observe(c);
    }
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

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < gauges.length; i++) {
                const gauge = gauges[i];
                if (gauge === entry.target) {
                    let percentage = Number(gauge.dataset["fill"])
                    gauge.style.width = percentage + "%"
                    observer.unobserve(gauge);
                    return
                }
            }
            textCorrupt(entry.target)
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });


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