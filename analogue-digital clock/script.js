//Toggling Script
let toggleBtn=document.getElementById('toggler');
    toggleBtn.addEventListener('change',()=>{
        if (toggleBtn.checked) {
            document.querySelector('.analogue-container').style.display="none"
            document.querySelector('.digital-container').style.display="flex"
            
        }
        if(!toggleBtn.checked) {
            document.querySelector('.analogue-container').style.display="flex";
            document.querySelector('.digital-container').style.display="none";
        }
    })


                             /********************Digital Clock Script***********************/

//Variables
let showBackClock = document.querySelector('.b-clock');
let showFrontClock = document.querySelector('.f-clock');

// Digital Clock Function 
//if seconds=60 increase minutes by 1,if minutes=60 increase hours by 1,if hours =24 return hours=1
let updateDigitalClock = setInterval(() => {
const ourTime=new Date();
let ourHrs=ourTime.getHours();
let ourMins=ourTime.getMinutes();
let ourSecs=ourTime.getSeconds();
ourSecs++
if(ourSecs===60){
   ourMins++;
   return ourSecs=0;
}if(ourMins===60){
  ourHrs++
  return ourMins=0
}if(ourHrs===24){
  return ourHrs=1;
}
if(ourHrs<10){
    showFrontClock.innerHTML=`0${ourHrs}:${ourMins}:${ourSecs}`;
    showBackClock.innerHTML=`0${ourHrs}:${ourMins}:${ourSecs}`; 
}else if (ourMins<10){
showFrontClock.innerHTML=`${ourHrs}:0${ourMins}:${ourSecs}`;
showBackClock.innerHTML=`${ourHrs}:0${ourMins}:${ourSecs}`;
} else if(ourSecs<10){
showFrontClock.innerHTML=`${ourHrs}:${ourMins}:0${ourSecs}`;
showBackClock.innerHTML=`${ourHrs}:${ourMins}:0${ourSecs}`;
}
else{
showFrontClock.innerHTML=`${ourHrs}:${ourMins}:${ourSecs}`
showBackClock.innerHTML=`${ourHrs}:${ourMins}:${ourSecs}`

}

}, 1000);


                             /********************Analogue Clock Script***********************/
 // Anlogue Clock Function
 let hrHand=document.querySelector('.hrs-hand');
 let minHand=document.querySelector(".mins-hand");
 let secHand=document.querySelector(".secs-hand");
 let updateAnalogueClock =() => {
 const ourDate= new Date();
 ourHrs = ourDate.getHours();
 ourMins = ourDate.getMinutes();
 ourSecs = ourDate.getSeconds();
 const rotateHrsDeg = (30 * ourHrs) + (0.5 * ourMins);
 const rotateMinsDeg = 6 * ourMins;
 const rotateSecsDeg = 6*ourSecs;
 secHand.style.transform=`rotate(${rotateSecsDeg}deg)`;
 minHand.style.transform=`rotate(${rotateMinsDeg}deg)`;
 hrHand.style.transform=`rotate(${rotateHrsDeg}deg)`
 
 }
 setInterval(updateAnalogueClock,1000);//Call Function