/*const apiKey = "498abcf5627f7da0c4e107319077ec46"
const recherche = document.getElementById('search').value;


function searchMovie() {
    let recherche = document.getElementById('search').value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${recherche}`)

}*/



function searchMovie() {

        const apiKey = "498abcf5627f7da0c4e107319077ec46";
        const query = document.getElementById('search').value;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
            .then(response => response.json())
            .then(data => {
                const resultsDiv = document.getElementById('results');
                resultsDiv.innerHTML = ""; // Clear previous results
                data.results.forEach(movie => {
                    const title = movie.title;
                    const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/150';
                    const movieDiv = document.createElement('div');
                    movieDiv.classList.add('movie');
                    movieDiv.innerHTML = `
                        <img src="${posterPath}" alt="${title}">
                        <div>
                            <h3>${title}</h3>
                        </div>
                    `;
                    resultsDiv.appendChild(movieDiv);
                });
            })
            .catch(error => console.error('Error fetching movies:', error));
}
searchMovie();
