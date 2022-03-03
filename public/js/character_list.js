
var searchButton = document.getElementById("search_submit");
var searchText = document.getElementById("searchbar")
searchButton.onclick = () => {
  var characters = document.getElementsByClassName("character_container");
  for (const char of characters) {
    if ((char.id).includes(searchText.value)) {
      document.getElementById(char.id).style.display = "flex";
    } else {
      document.getElementById(char.id).style.display = "none";
    }
    
  }

}