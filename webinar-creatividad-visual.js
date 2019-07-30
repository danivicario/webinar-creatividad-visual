// Dani Vicario - webinar-creatividad-visual experiment (canvas)- Tue 30 Jul 2019 13:53:13 CEST
const globalCompositeOperationModes = {
  'source-over': 'source-over',
  'source-in': 'source-in',
  'source-out': 'source-out',
  'source-atop': 'source-atop',
  'destination-over': 'destination-over',
  'destination-in': 'destination-in',
  'destination-out': 'destination-out',
  'destination-atop': 'destination-atop',
  lighter: 'lighter',
  copy: 'copy',
  xor: 'xor',
  multiply: 'multiply',
  screen: 'screen',
  overlay: 'overlay',
  darken: 'darken',
  lighten: 'lighten',
  'color-dodge': 'color-dodge',
  'color-burn': 'color-burn',
  'hard-light': 'hard-light',
  'soft-light': 'soft-light',
  difference: 'difference',
  exclusion: 'exclusion',
  hue: 'hue',
  saturation: 'saturation',
  color: 'color',
  luminosity: 'luminosity'
}

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

let img = new Image()
img.src = 'img.jpg'
img.onload = function () {
  //   ctx.translate(w2 - img.width / 2, (window.innerHeight - img.height) / 2)
  ctx.drawImage(img, 0, 0, img.width, img.height)

  let imgData = ctx.getImageData(0, 0, img.width, img.height)

  var posX = 0
  var posY = 0

  for (var i = 0; i < imgData.data.length; i += 4) {
    red = imgData.data[i]
    green = imgData.data[i + 1]
    blue = imgData.data[i + 2]
    alpha = imgData.data[i + 3]

    ctx.beginPath()
    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 1)`
    posX+=1
    if (posX > img.width) {
        posY+=1
        posX = 0
    }
    ctx.arc(posX, posY, 10, 0, PI_DOUBLE)
    ctx.fill()
    ctx.closePath()
  }
}
