//Created by Mohammed Bajaman - 02-03-2022
//Handles displaying map snippets when clicking on the 3 options

var mapMenuMonsdadt = document.getElementById("map-menu-monsdadt");
var mapMenuLiyue = document.getElementById("map-menu-liyue");
var mapMenuInazuma = document.getElementById("map-menu-inazuma");

var overlayMonsdadt = document.getElementById("overlay-monsdadt");
var overlayLiyue = document.getElementById("overlay-liyue");
var overlayInazuma = document.getElementById("overlay-inazuma");

overlayMonsdadt.addEventListener("mouseover", function(){
  overlayMonsdadt.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
})

overlayMonsdadt.addEventListener("mouseout", function(){
  overlayMonsdadt.style.backgroundColor = "rgba(0, 0, 0, 0)";
})

overlayLiyue.addEventListener("mouseover", function(){
  overlayLiyue.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
})

overlayLiyue.addEventListener("mouseout", function(){
  overlayLiyue.style.backgroundColor = "rgba(0, 0, 0, 0)";
})

overlayInazuma.addEventListener("mouseover", function(){
  overlayInazuma.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
})

overlayInazuma.addEventListener("mouseout", function(){
  overlayInazuma.style.backgroundColor = "rgba(0, 0, 0, 0)";
})


mapMenuMonsdadt.addEventListener("click", function(){
  mapPopup("Monsdadt.png", 1100, 700);
});

mapMenuLiyue.addEventListener("click", function(){
  mapPopup("Liyue.png", 1025, 700);
});

mapMenuInazuma.addEventListener("click", function(){
  mapPopup("Inazuma.png", 1300, 700);
});



function mapPopup(imageName, imageWidth, imageHeight){

  imageLocation = '/assets/map/' + imageName;

  Swal.fire({
    color: '#716add',
    width: imageWidth,
    padding: '0.5em',
    imageWidth: imageWidth,
    imageHeight: imageHeight,
    imageUrl: imageLocation,
    showClass: {
      popup: 'animate__animated animate__fadeIn'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut'
    },
    confirmButtonText: 'Close',
  });
}