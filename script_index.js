
function displayMoviesWithImages() {
    const ulElement = document.querySelector("#movies");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
        }
    };

fetch('https://api.themoviedb.org/3/movie/popular?api_key=498abcf5627f7da0c4e107319077ec46language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.slice(0,10).forEach(element => {
            let liElement = document.createElement("li");

            let imgElement = document.createElement("img");
            imgElement.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
            imgElement.alt = "Poster";
            imgElement.classList.add("myImage"); // Ajoute la classe "myImage" à l'élément img
            document.body.appendChild(imgElement);      

            liElement.appendChild(imgElement);
            liElement.innerHTML += `- Titre : ${element.title} - Date de sortie : ${element.release_date}`;

            ulElement.appendChild(liElement);
            document.getElementById('loadMoreButton').addEventListener('click', function() {
                displayMoviesWithImages(true);
            });
        });
    })
    .catch(err => {
        console.error(err);
    });
}

displayMoviesWithImages();


/*function search() {
    let input = document.getElementById('navbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('films');

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.opacity = "0";
            setTimeout(() => { x[i].style.display = "none"; }, 500);
        }
        else {
            x[i].style.display = "block";
            setTimeout(() => { x[i].style.opacity = "1"; }, 0);                
        }
    }
}
search();*/