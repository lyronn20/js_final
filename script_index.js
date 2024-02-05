
function displayMoviesWithImages() {
    const ulElement = document.querySelector("#movies");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
        }
    };
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(data => {
        let totalPages = Math.min(data.total_pages, 500);
        for (let page = 1; page <= totalPages; page++) {
            fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
                .then(response => response.json())
                .then(data => {
                console.log(data);
                data.results.slice(0,10).forEach(element => {
                    let liElement = document.createElement("li");

                    let imgElement = document.createElement("img");
                    imgElement.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
                    imgElement.alt = "Poster";
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
    })
}
displayMoviesWithImages();


/*function displayMoviesWithImages() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
        }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => {
            let totalPages = Math.min(data.total_pages, 500);
            for (let page = 1; page <= totalPages; page++) {
                fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        // Ajoutez ici le code pour afficher les films
                    })
                    .catch(err => {
                        console.error(err);
                    });
            }
        })
        .catch(err => {
            console.error(err);
        });
    }*/
