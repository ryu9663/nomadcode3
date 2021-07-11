const clock= document.querySelector("h2#clock");

function getClock(){
  const date= new Date();
  const hours = String(date.getHours()).padStart (2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = (`${hours}:${minutes}:${sec}`);
}

getClock();
//
// setTimeout(console.log(3),5000);

setInterval(getClock,1000);
