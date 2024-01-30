const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
    fetch(`http://localhost:5501/artists?name_like=${searchTerm}`)
      .then((response) => response.json())
      .then((results) => displayResults(results));
  }
  
  function displayResults(results) {
    hidePlaylists();
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    results.forEach((element) => {
      artistImage.src = element.urlImg;
      artistName.innerText = element.name;
    });
    resultArtist.classList.remove("hidden");
  }
  
  function hidePlaylists() {
    resultPlaylist.classList.add("hidden");
  }
  
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
      resultArtist.classList.add("hidden");
      resultPlaylist.classList.remove("hidden");
      return;
    }
    requestApi(searchTerm);
  }); 

/*const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();

const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Good morning"
    : currentHour >= 12 && currentHour < 18
    ? "Good afternoon"
    : "Good night";

greetingElement.textContent = greetingMessage;

const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  
  const containerWidth = container.offsetWidth; 
  const numColumns = Math.floor(containerWidth / 200);

  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});
observer.observe(container); */


/*
const lista = document.querySelectorAll('.playlist section')
const container = document.querySelector('.playlist')
const sua_bibioteca = document.querySelector('.sua_biblioteca')


container.addEventListener('scroll', function (){
//console.log('cheguei ' + lista[0].getBoundingClientRect().top)
    if(lista[0].getBoundingClientRect().top < 251){
        sua_bibioteca.classList.add('sombra')
        
    } else if(lista[0].getBoundingClientRect().top >= 251){
        sua_bibioteca.classList.remove('sombra')
        
    }
})

const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        btn.textContent = "Dark";
    }else{
        btn.textContent = "Light";
    }
})

/* 1)   npm uninstall -g json-server

2)  npm install -g json-server@0.17.4

3)   json-server --watch api-artists/artists.json port 3000

*se der erro no passo 3 executa a função abaixo e depois o passo 2 novamente

Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
 
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
}) */