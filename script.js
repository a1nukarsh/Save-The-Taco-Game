document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode==38){
        taco = document.querySelector('.taco')
        taco.classList.add('taco-ani')
        setTimeout(() => {
            taco.classList.remove('taco-ani')
        }, 1000);
    }
}

setInterval(() => {
    taco = document.querySelector('.taco')
    gameOver = document.querySelector('.gameOver')
    ant = document.querySelector('.ant')

    tx = window.getComputedStyle(taco, null).getPropertyValue('left')
    ty = window.getComputedStyle(taco, null).getPropertyValue('top')
    
    ax = window.getComputedStyle(taco, null).getPropertyValue('left')
    ay = window.getComputedStyle(taco, null).getPropertyValue('top')

    offsetX = Math.abs(tx-ax)
    offsetY = Math.abs(ty-ay)
}, 100);
