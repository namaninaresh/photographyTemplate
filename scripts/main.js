
const menu = document.querySelectorAll(".toggler");
menu.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("menu-expanded");
  })
);


/*const videos = document.querySelectorAll(".video-js");

videos.forEach((item)=> item.addEventListener("mouseover", function(){
    this.play();
}),
 
); */



const VideoController = function(isHovering, videoElement)
{
  if(isHovering) videoElement.play();
  else if(isHovering == false)
  {
    videoElement.pause();
  }
}