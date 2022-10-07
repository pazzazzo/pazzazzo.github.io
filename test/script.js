const ctx = document.getElementsByTagName("canvas")[0].getContext("2d")
const middleX = Math.floor(ctx.canvas.width/2)
const minX = 0
const maxX = ctx.canvas.width
const middleY = Math.floor(ctx.canvas.height/2)
const minY = 0
const maxY = ctx.canvas.height

let points = []

class Point {
    constructor (x = 0, y = 0, c = "#ffffff") {
        this.color = c
        this.x = x
        this.y = y
        this.vx = 0
        this.vy = 0
        ctx.fillStyle = c
        ctx.fillRect(Math.floor(x), Math.floor(y), 1, 1)
        points.push(this)
    }
    step() {
        this.x += this.vx
        this.y -= this.vy
        ctx.fillStyle = this.color
        ctx.fillRect(Math.floor(this.x), Math.floor(this.y), 1, 1)
    }
    Ivy() {
        this.vy = -this.vy
    }
    Ivx() {
        this.vx = -this.vx
    }
}

let pt = new Point(middleX, middleY)
pt.vx = .1
pt.vy = .8

function draw() {
    requestAnimationFrame(draw)
    ctx.clearRect(0, 0, maxX, maxY)
    points.forEach(pt => {
        if (pt.x >= maxX) {
            pt.Ivx()
        }
        if (pt.x <= 0) {
            pt.Ivx()
        }
        if (pt.y >= maxY) {
            pt.Ivy()
        }
        if (pt.y <= 0) {
            pt.Ivy()
        }
        pt.step()
    });
}
draw()