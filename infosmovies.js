let params = new URLSearchParams(location.search);
let token = params.get('id');
console.log(token)


function getInfosMovie(movie_id) {
const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
        }
};

fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=fr-FR`, options)
        .then(response => response.json())
        .then(data => {
        document.getElementById('title').innerText = `Titre : ${data.title}`;
        document.getElementById('poster').src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        document.getElementById('release_date').innerText = `Date de sortie : ${data.release_date}`;
        document.getElementById('description').innerText = `Description : ${data.overview}`;
        })
        .catch(err => console.error(err));
}


function getRecommendations(movie_id) {
        const options = {
                method: 'GET',
                headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
                }
        };

        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?language=fr-FR&page=1`, options)
                .then(response => response.json())
                .then(data => {
                        const recommendationsDiv = document.getElementById('recommendations');
                        recommendationsDiv.innerHTML = ""; 
                        data.results.forEach(movie => {
                                const title = movie.title;
                                const movieId = movie.id;
                                const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150';
                                const movieDiv = document.createElement('div');
                                movieDiv.classList.add('movie');
                                movieDiv.innerHTML = `
                                        <a href="movie.html?id=${movieId}">
                                                <img src="${posterPath}" alt="${title}">
                                                <div>
                                                        <h3>${title}</h3>
                                                </div>
                                        </a>
                                `;
                                recommendationsDiv.appendChild(movieDiv);
                        });
                })
                .catch(err => console.error(err));
}

getInfosMovie(token);
getRecommendations(token);
