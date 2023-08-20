console.log("Welcome to Spotify");

//audioElement.play();

//Initialize the variable 
let songIndex=0;
let audioElement=new Audio('WildestDreams.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs =[
   {songName:"Wildest Dreams", filePath:"WildestDreams.mp3",coverPath: "coverimg.jpeg" }

 ]


 // audioElement.play();

 masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.innerHTML = '<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>';
    } else {
      audioElement.pause();
      masterPlay.innerHTML = '<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>';
    }
  });
  



 //listen to Events 

 audioElement.addEventListener('timeupdate',()=>{
     
     // Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
     
     myProgressBar.value=progress;
 }

 )

 myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
 })