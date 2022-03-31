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

  imageLocation = '/assets/map/' + imageName; // Region map image

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

  // Grab swal window
  var swalWindow = document.getElementsByClassName("swal2-popup")[0];

  // Create p node and add text
  var toggleBoss = document.createElement("p");
  var textNode = document.createTextNode("Bosses");
  toggleBoss.appendChild(textNode);
  swalWindow.appendChild(toggleBoss); //add to swal window

  // Load overlay image
  loadBosses(imageName, toggleBoss, swalWindow);
  
}

// Load approprite boss map based on region
function loadBosses(mapName, toggleBoss, swalWindow){

  // Check to see if boss map is enabled
  var bossMapElementExists = document.getElementsByClassName("boss-map");

  // Add onclick for toggle button
  toggleBoss.addEventListener("click", function(){
  bossMapLocation = '/assets/map/' + mapName.slice(0, -4) + '-bosses.png'; //slice string to get proper name

  if(bossMapElementExists.length > 0){
    bossMapElementExists[0].remove(); // See if boss mapp loaded
  } else {
    // Create Image element
    var bossMap = document.createElement('img');
    bossMap.classList.add("swal2-image");
    bossMap.classList.add("boss-map");
    bossMap.src = bossMapLocation;

    if(mapName == "Inazuma.png"){
      bossMap.style = "position: absolute; top: 8px; bottom: 16px; left: 3px; width: 1284px; height: 700px;";
    } else {
      bossMap.style = "position: absolute; top: 8px; bottom: 16px; left: 3px; width: 1100px; height: 700px;";
    }
    
    swalWindow.appendChild(bossMap);
  }

  });
}