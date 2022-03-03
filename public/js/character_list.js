
var characters = document.getElementsByClassName("character_container");
for (const char of characters) {
  char.onclick = () => {
    window.location.href = ((window.location.href).slice(0,-19) + 'character_pages/' + char.id + '.html');
  }
}

var searchButton = document.getElementById("search_submit");
var searchText = document.getElementById("searchbar")
searchButton.onclick = () => {
  var characters = document.getElementsByClassName("character_container");
  for (const char of characters) {
    var searched = searchText.value;
    searched = searched.toLowerCase();
    searched = searched.trim();

    if ((char.id).includes(searchText.value)) {
      document.getElementById(char.id).style.display = "flex";
    } else {
      document.getElementById(char.id).style.display = "none";
    }
  }
}

