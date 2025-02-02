function toggleSearch() {
    var searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      searchBar.focus();
    }
}
function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.classList.contains("open")) {
      sidenav.classList.remove("open");
  } else {
      sidenav.classList.add("open");
  }
}
