
var weapons = document.getElementsByClassName("character_container");
for (const wep of weapons) {
  wep.onclick = () => {
    window.location.href = ((window.location.href).slice(0,-19) + 'weapon_pages/' + wep.id + '.html');
  }
}

var searchButton = document.getElementById("search_submit");
var searchText = document.getElementById("searchbar")
searchButton.onclick = () => {
  var weapons = document.getElementsByClassName("character_container");
  for (const wep of weapons) {
    var searched = searchText.value;
    searched = searched.toLowerCase();
    searched = searched.trim();

    if ((wep.id).includes(searchText.value)) {
      document.getElementById(wep.id).style.display = "flex";
    } else {
      document.getElementById(wep.id).style.display = "none";
    }
  }
}

