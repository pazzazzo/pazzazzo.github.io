(function () {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            let gauges = document.getElementsByClassName("gauge-inner")
            for (let i = 0; i < gauges.length; i++) {
                const gauge = gauges[i];
                let percentage = Number(gauge.dataset["fill"])
                gauge.style.width = percentage + "%"
            }
        }, 150);
    })
})();


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
