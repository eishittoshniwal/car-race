var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var car1x=10
var car1y=10
var car2x=10
var car2y=120
var background="bg.jpg"
var car1img="car1.png"
var car2img="car2.jfif"
function add(){
    bg=new Image()
    bg.onload=uploadbackground
    bg.src=background

    car1=new Image()
    car1.onload=uploadcar1
   car1.src=car1img

   car2=new Image()
   car2.onload=uploadcar2
   car2.src=car2img
}

function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
}
function uploadcar1(){
    ctx.drawImage(car1,car1x,car1y,100,100)
}
function uploadcar2(){
    ctx.drawImage(car2,car2x,car2y,100,100)
}
  
      window.addEventListener("keydown",KD)
      function KD(e){
var x=e.keyCode
console.log(x)
if(x==37){
    console.log("leftpress")
    left1()
}
if(x==38){
    console.log("uppress")
    up1()
}
if(x==39){
    console.log("rightpress")
    right1()
}
if(x==40){
    console.log("downpress")
    down1()
}
if(x==65){
    console.log("leftpress")
    left2()
}
if(x==87){
    console.log("uppress")
    up2()
}
if(x==68){
    console.log("rightpress")
    right2()
}
if(x==83){
    console.log("downpress")
    down2()
}
if(car1x>500){
    console.log("car 1 won!");
    document.getElementById("gamestatus").innerHTML="car 1 won!";
}
if(car2x>500){
   console.log("car 2 won!");
   document.getElementById("gamestatus").innerHTML="car 2 won!";
}
}

function down1(){
  if(car1y<=500){
      car1y=car1y+10
      uploadbackground()
      uploadcar1()
      uploadcar2()
  }  
}
function up1(){
    if(car1y>=0){
        car1y=car1y-10
    uploadbackground()
    uploadcar1()
    uploadcar2()
}
}
function left1(){
    if(car1x>=0){
        car1x=car1x-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}
function right1(){
    if(car1x<=700){
        car1x=car1x+10
        uploadbackground()
        uploadcar2()
        uploadcar1()
    }
}

function down2(){
    if(car2y<=500){
        car2y=car2y+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }  
  }
  function up2(){
      if(car2y>=0){
          car2y=car2y-10
      uploadbackground()
      uploadcar1()
      uploadcar2()
  }
  }
  function left2(){
      if(car2x>=0){
          car2x=car2x-10
          uploadbackground()
          uploadcar1()
          uploadcar2()
      }
  }
  function right2(){
      if(car2x<=700){
          car2x=car2x+10
          uploadbackground()
          uploadcar2()
          uploadcar1()
      }
  }
