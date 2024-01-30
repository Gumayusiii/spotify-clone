/*
function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => resultArtist(result))
}

document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  if(searchTerm === '') {
    playlistContainer.classList.add('hidden');
    resultArtist.classList.remove('hidden');
    return;
  }
  requestApi(searchTerm);
}) 
*/