/* ---------- Html ---------- */
//Pages
const StartPage = document.getElementById("StartPage"),
    ReadyPage = document.getElementById("ReadyPage"),
    ExercisePage = document.getElementById("ExercisePage"),
    ReadyCPage = document.getElementById("ReadyCPage"),
    CorrectionPage = document.getElementById("CorrectionPage");
//Infos
const ReadyText = document.getElementById("ReadyText"),
    ExStep = document.getElementById("ExStep"),
    ExTimerBar = document.getElementById("ExTimerBar"),
    ExTimerText = document.getElementById("ExTimerText"),
    Eq1Text = document.getElementById("Eq1"),
    Eq2Text = document.getElementById("Eq2");
//Inputs
const StartTimes = document.getElementById("Start-times"),
    StartGame = document.getElementById("Start-game"),
    PauseGame = document.getElementById("ExPause");

/* ---------- Var ---------- */
var time = parseInt(StartTimes.value),
    timer = parseInt(StartTimes.value),
    exid = 0,
    paused = false;

//exs
const a1 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a2 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a3 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a4 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a5 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }

const m1 = `(${a1.ops1}${a1.mul1}x${a1.op1}${a1.add1})(${a1.ops2}${a1.mul2}x${a1.op2}${a1.add2})`
const m2 = `(${a2.ops1}${a2.mul1}x${a2.op1}${a2.add1})(${a2.ops2}${a2.mul2}x${a2.op2}${a2.add2})`
const m3 = `(${a3.ops1}${a3.mul1}x${a3.op1}${a3.add1})(${a3.ops2}${a3.mul2}x${a3.op2}${a3.add2})`
const m4 = `(${a4.ops1}${a4.mul1}x${a4.op1}${a4.add1})(${a4.ops2}${a4.mul2}x${a4.op2}${a4.add2})`
const m5 = `(${a5.ops1}${a5.mul1}x${a5.op1}${a5.add1})(${a5.ops2}${a5.mul2}x${a5.op2}${a5.add2})`

const a11 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a22 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a33 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a44 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }
const a55 = { "ops1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul1": Math.floor(Math.random() * 10) + 10, "op1": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add1": Math.floor(Math.random() * 10) + 10, "ops2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "", "mul2": Math.floor(Math.random() * 10) + 10, "op2": Math.floor(Math.random() * 2) + 1 === 1 ? "-" : "+", "add2": Math.floor(Math.random() * 10) + 10 }

const m11 = `(${a11.ops1}${a11.mul1}x${a11.op1}${a11.add1})(${a11.ops2}${a11.mul2}x${a11.op2}${a11.add2})`
const m22 = `(${a22.ops1}${a22.mul1}x${a22.op1}${a22.add1})(${a22.ops2}${a22.mul2}x${a22.op2}${a22.add2})`
const m33 = `(${a33.ops1}${a33.mul1}x${a33.op1}${a33.add1})(${a33.ops2}${a33.mul2}x${a33.op2}${a33.add2})`
const m44 = `(${a44.ops1}${a44.mul1}x${a44.op1}${a44.add1})(${a44.ops2}${a44.mul2}x${a44.op2}${a44.add2})`
const m55 = `(${a55.ops1}${a55.mul1}x${a55.op1}${a55.add1})(${a55.ops2}${a55.mul2}x${a55.op2}${a55.add2})`
/* ---------- Events ---------- */
StartGame.addEventListener("click", () => {
    time = time = parseInt(StartTimes.value)
    timer = parseInt(StartTimes.value)
    StartPage.classList.remove("active")
    ReadyPage.classList.add("active")
    var timerstart = 5
    setInterval(() => {
        timerstart--
        ReadyText.innerText = timerstart
        if (timerstart == 0) {
            Start()
            ReadyPage.classList.remove("active")
            ExercisePage.classList.add("active")
        }

    }, 1000);

})

/* Exercice */
function Start() {
    exid = 1
    ExStep.innerText = exid + "/5"
    DisplayEx(exid)
    setInterval(() => {
        if (!paused) {
            timer--
            if (timer < 0) {
                exid++
                if (exid > 5) {
                    paused = true
                    ExercisePage.classList.add("finish")
                    setTimeout(() => {
                        ReadyCPage.classList.add("active")
                        ExercisePage.classList.remove("active")
                    }, 200);
                    setTimeout(() => {
                        ReadyCPage.classList.remove("active")
                        CorrectionPage.classList.add("active")
                    }, 3200);
                } else {
                    ExStep.innerText = exid + "/5"
                    timer = parseInt(StartTimes.value)
                    DisplayEx(exid)
                }
            }
            ExTimerBar.value = timer
            ExTimerText.innerText = timer + "s"
        }
    }, 1000);

    PauseGame.addEventListener("click", () => {
        if (!paused) {
            PauseGame.innerText = "Continuer"
            paused = true
        } else if (paused) {
            PauseGame.innerText = "Pause"
            paused = false
        }
    })
}

function DisplayEx(id) {
    if (id == 1) {
        Eq1Text.innerText = `1) ${m1} = 0`
        Eq2Text.innerText = `2) ${m11} = 0`
    } else if (id == 2) {
        Eq1Text.innerText = `1) ${m2} = 0`
        Eq2Text.innerText = `2) ${m22} = 0 `
    } else if (id == 3) {
        Eq1Text.innerText = `1) ${m3} = 0`
        Eq2Text.innerText = `2) ${m33} = 0`
    } else if (id == 4) {
        Eq1Text.innerText = `1) ${m4} = 0`
        Eq2Text.innerText = `2) ${m44} = 0`
    } else if (id == 5) {
        Eq1Text.innerText = `1) ${m5} = 0`
        Eq2Text.innerText = `2) ${m55} = 0`
    } 
}

document.getElementById("correction1").innerText = `1:\n\ta) ${m1} | x = ${a1.op1 == "-" ? "" : "-"}${a1.add1}/${a1.ops1}${a1.mul1} ou ${a1.op2 == "-" ? "" : "-"}${a1.add2}/${a1.ops2}${a1.mul2}\n\tb) ${m11} | x = ${a11.op1 == "-" ? "" : "-"}${a11.add1}/${a11.ops1}${a11.mul1} ou ${a11.op2 == "-" ? "" : "-"}${a11.add2}/${a11.ops2}${a11.mul2}`
document.getElementById("correction2").innerText = `2:\n\ta) ${m2} | x = ${a2.op1 == "-" ? "" : "-"}${a2.add1}/${a2.ops1}${a2.mul1} ou ${a2.op2 == "-" ? "" : "-"}${a2.add2}/${a2.ops2}${a2.mul2}\n\tb) ${m22} | x = ${a22.op1 == "-" ? "" : "-"}${a22.add1}/${a22.ops1}${a22.mul1} ou ${a22.op2 == "-" ? "" : "-"}${a22.add2}/${a22.ops2}${a22.mul2}`
document.getElementById("correction3").innerText = `3:\n\ta) ${m3} | x = ${a3.op1 == "-" ? "" : "-"}${a3.add1}/${a3.ops1}${a3.mul1} ou ${a3.op2 == "-" ? "" : "-"}${a3.add2}/${a3.ops2}${a3.mul2}\n\tb) ${m33} | x = ${a33.op1 == "-" ? "" : "-"}${a33.add1}/${a33.ops1}${a33.mul1} ou ${a33.op2 == "-" ? "" : "-"}${a33.add2}/${a33.ops2}${a33.mul2}`
document.getElementById("correction4").innerText = `4:\n\ta) ${m4} | x = ${a4.op1 == "-" ? "" : "-"}${a4.add1}/${a4.ops1}${a4.mul1} ou ${a4.op2 == "-" ? "" : "-"}${a4.add2}/${a4.ops2}${a4.mul2}\n\tb) ${m44} | x = ${a44.op1 == "-" ? "" : "-"}${a44.add1}/${a44.ops1}${a44.mul1} ou ${a44.op2 == "-" ? "" : "-"}${a44.add2}/${a44.ops2}${a44.mul2}`
document.getElementById("correction5").innerText = `5:\n\ta) ${m5} | x = ${a5.op1 == "-" ? "" : "-"}${a5.add1}/${a5.ops1}${a5.mul1} ou ${a5.op2 == "-" ? "" : "-"}${a5.add2}/${a5.ops2}${a5.mul2}\n\tb) ${m55} | x = ${a55.op1 == "-" ? "" : "-"}${a55.add1}/${a55.ops1}${a55.mul1} ou ${a55.op2 == "-" ? "" : "-"}${a55.add2}/${a55.ops2}${a55.mul2}`
