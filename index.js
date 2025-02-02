function toggleSearch() {
    var searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      searchBar.focus();
    }
  }
  