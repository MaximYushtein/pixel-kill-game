let h1 = document.getElementById("h1")
let swat=document.getElementById("swat")
let swat1=document.getElementById("swat1")
 let enemyBOTTOM
document.onmousemove=function(event){
    swat.style.left=event.offsetX+'px'
    swat.style.top=event.offsetY+'px' 
    // swat1.style.left=event.offsetX+'px'
    // swat1.style.top=event.offsetY+'px' 
}
setInterval(function () {
        let enemy = document.createElement("img")
        // enemy eto monster
        enemy.src = "swat1 (1).png"
        document.body.appendChild(enemy)
        enemy.style.left =1097 + "px"
        enemy.style.bottom = 124 + "px"
        // enemy.style.transition = Math.random() * 8 + 2 + "s"
        enemy.classList.add("enemy")
    // set kotoriy zamedlayet vrema
    // setTimeout(function () {
    //     enemy.style.bottom = "-160px"
    // }, 1000)
}, 1000)
setInterval(function () {
    let enemies = document.getElementsByClassName("enemy")
    // Цикл двигает врагов
    for (let e of enemies) {
        // parseInt переводит из строки в число
        let enemyBOTTOM = parseInt(window.getComputedStyle(e).getPropertyValue("bottom")) - 1
        let enemyLEFT = parseInt(window.getComputedStyle(e).getPropertyValue("left"))
        e.style.bottom = enemyBOTTOM + "px"
        if (enemyBOTTOM < -200) {
            e.remove()
        }
        // if (Math.abs(enemyLEFT - x) < 60 && Math.abs(enemyBOTTOM - y) < 60) {
        //     spaceship.remove()
        //     h1.innerHTML = "you lose"
        // }
        }
// Интервал работает 1000 раз в секунду, чтобы монстры и корабль двигались быстро и плавно)
},1)