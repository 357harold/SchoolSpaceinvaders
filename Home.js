var score = 0;
var animatie = ['example','example2','example3'];
document.onkeydown = checkKey
window.onload = setInterval(movekogel,100)
var raketrarray = []

function windowWidth(){
    return window.innerWidth
}
function windowHeight(){
    return window.innerHeight
}

function scorecounter() {
  score++;   
    // window.document.getElementById('bal').style.width = window.document.getElementById('bal').clientWidth-1 + 'px';
   // window.document.getElementById('bal').style.height = window.document.getElementById('bal').clientHeight-1 + 'px';
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    event.CLICK
    console.log(coords)
     document.getElementById('bal').style.background = "url(giph.gif)";
    window.setTimeout(function(){
        document.getElementById('bal').style.background = "url(foto.png)";
    }, 1000);
    if (score == 20){
        console.log('Button')
        window.document.getElementById('Button').style.display= 'block';
        console.log(window.document.getElementById('Button').style.display)
    }
    animationchange()
    addvliegtuig(event)
}
function resetgame(){
    score = 0;
    console.log('Button')
    document.getElementById('Button').style.display= 'none';
 //   window.document.getElementById('bal').style.width = '50px';
//    window.document.getElementById('bal').style.height = '50px';
}
function vliegtuigjeboem(){
}
function animationchange(){
    console.log('animationchange')
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    //event.CLICK
    //window.getComputedStyle('bal') = document.getElementById('bal')
    document.getElementById('bal').style.animationName = animatie[Math.floor(Math.random() * animatie.length)]
    console.log(window.getComputedStyle(document.getElementById('bal')).animationName)
}
function addvliegtuig(event){
    console.log('Kippetje')
    var img = document.createElement("img");
    img.setAttribute("src", "foto.png")
    img.setAttribute("id","bal")
   document.body.appendChild(img);
}
function checkKey(e) {
    e = e || window.event;
    var keycode = e.keyCode;
    var stringcode = String.fromCharCode(keycode);
    let image = document.getElementById('Kanon')
    let imageComputed = getComputedStyle(image)
    let imageLeft = parseInt(imageComputed.left)
    let imageRight = Math.abs(parseInt(imageComputed.right))
    moveImage(keycode,imageLeft,imageRight);
}

function showLaser(imageLeft){
    var kogel = document.createElement('IMG')
    kogel.src = 'kogel.png'
    kogel.style.position = "fixed"
    kogel.style.left = imageLeft + 550 + "px"
    kogel.style.bottom = "15px"
    raketrarray.push(kogel)
    document.getElementById('Kanonbox').appendChild(kogel)
}
function moveLaser(){
    var windowhigh = windowHeight();
    laserarray.forEach(function(item, index){
        item.style.bottom = parseInt(item.style.bottom) + 20 + "px"
        if (parseInt(item.style.bottom) > windowhigh){
            laserarray.splice(index, index)
        }
    })
    
}
function moveImage(keycode, imageLeft, imageRight){
    if(keycode == 32){
        showLaser(imageLeft)
    }
    if(keycode == 37 && imageLeft > 0){
        document.getElementById('Kanon').style.left = imageLeft - 20 + "px" 
    }
    if(keycode == 39 && imageRight < windowWidth() - 100){
        document.getElementById('Kanon').style.left = imageLeft + 20 + "px"
    }
}