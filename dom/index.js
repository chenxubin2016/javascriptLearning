var div = document.createElement('div');
document.body.appendChild(div);
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'red';
div.style.position = 'absolute';
div.style.left = '0';
div.style.top = '0';
var speed = 1;

var timer = setInterval(function () {
    speed += speed / 500;
    // console.log(speed)
    div.style.left = parseInt(div.style.left) + speed + 'px';
    div.style.top = parseInt(div.style.top) + speed + 'px';
    if (parseInt(div.style.left) > 100) {
        clearInterval(timer);
    }
}, 30);


document.onkeydown = function (e) {
    speed+=speed/50;
    switch (e.which) {
        case 38:
            div.style.top = parseInt(div.style.top) - speed + 'px';
            break;
        case 40:
            div.style.top = parseInt(div.style.top) + speed + 'px';
            break;
        case 37:
            div.style.left = parseInt(div.style.left) - speed + 'px';
            break;
        case 39:
            div.style.left = parseInt(div.style.left) + speed + 'px';
            break;

    }
}


