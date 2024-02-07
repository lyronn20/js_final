let currentPage = 1;
let query = '';

function searchMovie(page) {
    const apiKey = "498abcf5627f7da0c4e107319077ec46";
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            if (page === 1) {
                resultsDiv.innerHTML = ""; // Clear previous results only on the first page
            }
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
                resultsDiv.appendChild(movieDiv);
            });
            currentPage++;
        })
        .catch(error => console.error('Error fetching movies:', error));
}

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // User has scrolled to the bottom of the page, load the next page of results
        searchMovie(currentPage);
    }
};

document.getElementById('search').addEventListener('input', function(e) {
    query = e.target.value;
    currentPage = 1; // Reset to the first page for a new search
    searchMovie(currentPage);
});
