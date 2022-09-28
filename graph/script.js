const ctx = document.getElementsByTagName("canvas")[0].getContext("2d")
const inp = document.getElementsByTagName("input")[0]
const middleX = Math.floor(ctx.canvas.width/2)
const minX = 0 - middleX
const maxX = ctx.canvas.width + middleX
const middleY = Math.floor(ctx.canvas.height/2)
const minY = 0 - middleY
const maxY = ctx.canvas.height + middleY

function f(x) {
    return x*4
}

function square(x, y, l) {
    ctx.fillStyle = l ? "#009090" : "#ffffff"
    ctx.fillRect(Math.floor(x + middleX), Math.floor(-y + middleY), 1, 1)
}
console.log(minX)
console.log(maxX);;
for (let x = minX; x < maxX; x++) {
    square(x, 0, true)
}
for (let y = minY; y < maxY; y++) {
    square(0, y, true)
}

for (let x = minX; x < maxX; x++) {
    square(x, f(x))
}

document.addEventListener("keydown", (KE) => {
    if (KE.key === "Enter") {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        for (let x = minX; x < maxX; x++) {
            square(x, 0, true)
        }
        for (let y = minY; y < maxY; y++) {
            square(0, y, true)
        }
        for (let x = minX; x < maxX; x++) {
            square(x, eval(inp.value.replace(/x/g, x)))
        }
    }
})