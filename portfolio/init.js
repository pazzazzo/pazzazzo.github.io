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
