const htm = require('htm');
const h = htm.bind(require('vhtml'));
const combos = require('spencer-color').combos

const ratio = 1.6180

const ratios = [
  1 * ratio,
  2 * ratio,
  3 * ratio,
  4 * ratio,
  5 * ratio,
  6 * ratio,
  7 * ratio,
]
const randomRatio = () => {
  let r = Math.floor(Math.random() * ratios.length)
  return ratios[r]
}

const shapes = {

  line: (num, combo = 'roma') => {
    let colors = combos[combo] || []
    let lines = []
    for (let i = 0; i < num; i += 1) {
      let c = colors[i % colors.length]
      let style = `flex:${randomRatio()}; height:100%; background-color:${c}`
      lines.push(h`<div style=${style}></div>`)
    }
    return h`<div class="row h1 rounded" style="overflow: hidden;">${lines}</div>`
  },

  maze: (x = 4, y = 4, combo = 'roma') => {
    let colors = combos[combo] || []

    const makeRow = function() {
      let boxes = []
      for (let i = 0; i < x; i += 1) {
        let c = colors[i % colors.length]
        if (i === 2) {
          c = 'none'
        }
        let style = `flex:${randomRatio()}; height:100%; background-color:${c}`
        boxes.push(h`<div style=${style}></div>`)
      }
      return boxes
    }
    let rows = []
    for (let i = 0; i < y; i += 1) {
      rows.push(h`<div class="row" style="flex:1;">${makeRow()}</div>`)
    }
    return h`<div class="col h8 rounded" style="overflow: hidden;">
      ${rows}
    </div>`
  }
}
module.exports = shapes
