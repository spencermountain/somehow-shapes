const htm = require('htm');
const h = htm.bind(require('vhtml'));
const shapes = require('./src')

let html = h`<div class="col grey">

<div class="goleft code">shape.line(7, 'roma'):</div>
<div class="h4 w30">${shapes.line(7, 'roma')}</div>


<div class="mt5 goleft code">shape.maze(5, 7, 'david'):</div>
<div class="h4 w30">${shapes.maze(5, 7, 'david')}</div>


</div>`
document.querySelector(`#stage`).innerHTML = html
