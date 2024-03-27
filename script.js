let h1 = document.getElementById("h1")
let swat = document.getElementById("swat")
let swat1 = document.getElementById("swat1")
let enemyBOTTOM
let scoreh2 = document.getElementById("scoreh2")
let score = 0
let swatwidth = parseInt(window.getComputedStyle(swat).getPropertyValue("width"))
let x, y
document.onmousemove = function (event) {
    x = event.offsetX
    y = window.innerHeight - event.offsetY
    swat.style.left = event.offsetX + 'px'
    swat.style.top = event.offsetY + 'px'
    // swat1.style.left=event.offsetX+'px'
    // swat1.style.top=event.offsetY+'px' 
}
setInterval(function () {
   if(swatwidth<=250){
    let enemy = document.createElement("img")
     // enemy eto monster
     enemy.src = "swat1 (1).png"
     document.body.appendChild(enemy)
     enemy.style.width = Math.random() * 150 + 20 + "px"
     enemy.style.left = window.innerWidth + "px"
     enemy.style.bottom = 243 + "px"
     // enemy.style.transition = Math.random() * 8 + 2 + "s"
     enemy.classList.add("enemy")
     // set kotoriy zamedlayet vrema
     // setTimeout(function () {
     //     enemy.style.bottom = "-160px"
     // }, 1000)
   }
}, 1000)
setInterval(function () {
    let enemies = document.getElementsByClassName("enemy")
    // Цикл двигает врагов
    for (let e of enemies) {
        // parseInt переводит из строки в число
        let enemyBOTTOM = parseInt(window.getComputedStyle(e).getPropertyValue("bottom"))
        let enemyLEFT = parseInt(window.getComputedStyle(e).getPropertyValue("left")) - 1
        let enemyWIDTH = parseInt(window.getComputedStyle(e).getPropertyValue("width"))
        e.style.left = enemyLEFT + "px"
        swatwidth = parseInt(window.getComputedStyle(swat).getPropertyValue("width"))
        if (enemyLEFT < -200) {
            e.remove()
        }
        if (Math.abs(enemyLEFT - x) < 60 && Math.abs(enemyBOTTOM - y) < 60 && enemyWIDTH < swatwidth) {
            e.remove()
            score = score + enemyWIDTH
            scoreh2.innerHTML = "score:" + score
            let width = Math.random() * 9 + 3
            swat.style.width = swatwidth + 5 + "px"
          
            //     h1.innerHTML = "you lose"
        }
        if (swatwidth + 5 > 250) {
            h1.innerHTML = "you win"
              e.remove()
        }
        if (Math.abs(enemyLEFT - x) < 60 && Math.abs(enemyBOTTOM - y) < 60 && enemyWIDTH > swatwidth) {
            swat.remove()

        }
    }
    // Интервал работает 1000 раз в секунду, чтобы монстры и корабль двигались быстро и плавно)
}, 1)
// 1. Поставить красивые шрифты

// 3*. Если ты выиграл, то враги должны исчезнуть