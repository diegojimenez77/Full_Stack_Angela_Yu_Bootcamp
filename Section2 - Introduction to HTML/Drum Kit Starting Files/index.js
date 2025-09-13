var numberOfButtons = document.querySelectorAll(".drum").length;

for (i=0; i<numberOfButtons; i++){
if(i==0){
function handleClick(){
   var audio1 = new Audio("./sounds/crash.mp3");
   audio1.play();
}
} else if(i==1){
  function handleClick(){
   var audio2 = new Audio("./sounds/kick-bass.mp3");
   audio2.play();
}
}else if(i==2){
  function handleClick(){
   var audio3 = new Audio("./sounds/snare.mp3");
   audio3.play();
}
}else if(i==3){
  function handleClick(){
   var audio4 = new Audio("./sounds/tom-1.mp3");
   audio4.play();
}
}else if(i==4){
  function handleClick(){
   var audio5 = new Audio("./sounds/tom-2.mp3");
   audio5.play();
}
}else if(i==5){
  function handleClick(){
   var audio6 = new Audio("./sounds/tom-3.mp3");
   audio6.play();
}
}else if(i==6){
  function handleClick(){
   var audio7 = new Audio("./sounds/tom-4.mp3");
   audio7.play();
}
};

document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", handleKeyEvent);   

   function handleKeyEvent(event){
      switch (event.key){
         case "a":
            var audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
            console.log(event.key);
            break;

         case "s":
            var audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            console.log(event.key);
            break;

         case "d":
            var audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
            console.log(event.key);
            break;

         case "f":
            var audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
            console.log(event.key);
            break;

         case "j":
            var audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
            console.log(event.key);
            break;

         case "k":
            var audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();
            console.log(event.key);
            break;

          case "l":
            var audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();
            console.log(event.key);
            break;
         
         default: console.log("Key with no sound");
      }
   }