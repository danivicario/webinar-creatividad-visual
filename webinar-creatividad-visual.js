// Dani Vicario - webinar-creatividad-visual experiment (canvas)- Tue 30 Jul 2019 13:53:13 CEST
function randomFloat (min, max) {
  return Math.random() * (max - min) + min
}

function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById('canvas')

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext('2d')

var w = window.innerWidth
var h = window.innerHeight
var w2 = w / 2
var h2 = h / 2

var PI = Math.PI
var PI_DOUBLE = 2 * Math.PI
var PI_HALF = Math.PI / 2

canvasDOMEl.setAttribute('height', window.innerHeight)
canvasDOMEl.setAttribute('width', window.innerWidth)

// Array(300)
//   .fill()
//   .forEach(() => {
//     ctx.beginPath()
//     ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, .80)`
//     ctx.arc(randomInt(0, w), randomInt(0, h), randomInt(5, 50), 0, PI_DOUBLE)
//     ctx.fill()
//     ctx.closePath()
//   })

for (var i = 0; i < 1000; i+=30) {
  let posX = 0;

  Array(w)
    .fill()
    .forEach((x, idx) => {
      posX += 2

      ctx.beginPath()
      ctx.fillStyle = `rgba(${randomInt(0, 255)}, ${randomInt(
        0,
        255
      )}, ${randomInt(0, 255)}, .20)`
      // ctx.arc(posX, h2 + 100 * Math.sin(posX * Math.PI / 180), randomInt(5, 30), 0, PI_DOUBLE)
      // ctx.arc(posX, h2 + 100 * Math.sin(posX * Math.PI / 180), randomInt(5, 5), 0, PI_DOUBLE)
      ctx.arc(
        w2 + (50 + i) * Math.cos((posX * Math.PI) / 180),
        h2 + (50 + i) * Math.sin((posX * Math.PI) / 180),
        randomInt(5, 15),
        0,
        PI_DOUBLE
      )
      ctx.fill()
      ctx.closePath()
    })
}
