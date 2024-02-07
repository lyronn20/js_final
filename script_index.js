
let currentPage = 1;
let isLoading = false;

function displayMoviesWithImages() {
    if (isLoading) return; // Si isLoading est vrai, arrêtez la fonction

    isLoading = true; // Définir isLoading à vrai avant de commencer à charger les films


    const ulElement = document.querySelector("#movies");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
        }
    };

    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=${currentPage}&sort_by=popularity.desc`, options)
        .then(response => response.json())
        .then(data => {
        data.results.forEach(element => {


            let liElement = document.createElement("li");

            let linkElement = document.createElement("a");
            linkElement.href = `movie.html?id=${element.id}&`;

            let imgElement = document.createElement("img");
            imgElement.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
            imgElement.alt = "Poster";

            liElement.appendChild(linkElement);{
                linkElement.appendChild(imgElement);
            }

            let titleElement = document.createElement("span");
            titleElement.className = "movie-title"; // Ajoutez la classe "movie-title" au titre
            titleElement.textContent = `- Titre : ${element.title}`;

            let dateElement = document.createElement("span");
            dateElement.className = "movie-date"; // Ajoutez la classe "movie-date" à la date de sortie
            dateElement.textContent = `- Date de sortie : ${element.release_date}`;

            liElement.appendChild(titleElement);
            liElement.appendChild(dateElement);

            ulElement.appendChild(liElement);
        });

            currentPage++;
            isLoading = false; 
        })
        .catch(err => {
            console.error(err);
            isLoading = false; 
        });

        
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        displayMoviesWithImages();
    }
});

displayMoviesWithImages();