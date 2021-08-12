document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode == 38){
        taco = document.querySelector('.taco');
        taco.classList.add('animateTaco');
        setTimeout(() => {
            taco.classList.remove('animateTaco')
        }, 700);
    }
    if(e.keyCode == 39){
        taco = document.querySelector('.taco');
        tacoX = parseInt(window.getComputedStyle(taco, null).getPropertyValue('left'));
    }
}

setInterval(() => {
    taco = document.querySelector('.taco');
    gameOver = document.querySelector('.gameOver');
    ant = document.querySelector('.ant');

    tx = parseInt(window.getComputedStyle(taco, null).getPropertyValue('left'));
    ty = parseInt(window.getComputedStyle(taco, null).getPropertyValue('bottom'));

    ax = parseInt(window.getComputedStyle(ant, null).getPropertyValue('left'));
    ay = parseInt(window.getComputedStyle(ant, null).getPropertyValue('bottom'));

    offsetX = Math.abs(tx-ax);
    offsetY = Math.abs(ty-ay);
    console.log(offsetX, offsetY)

    if(offsetX<93 && offsetY<93){
        gameOver.style.visibility = 'visible';
        ant.classList.remove('antani');
    }

}, 100);