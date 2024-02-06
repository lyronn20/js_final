function search() {
    document.getElementById('search').addEventListener('input', function(e) {
        const query = e.target.value;
        if (query.length > 1) { // Pour éviter de faire des requêtes inutiles, attendez que l'utilisateur ait tapé au moins 3 caractères
            fetch(`https://api.themoviedb.org/3/search/movie?api_key="498abcf5627f7da0c4e107319077ec46"&language=fr-FR&query=${encodeURIComponent(query)}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => {
                    const resultsDiv = document.getElementById('results');
                    resultsDiv.innerHTML = ''; // Effacer les résultats précédents
                    data.results.forEach(movie => {
                        const movieDiv = document.createElement('div');
                        movieDiv.textContent = movie.title;
                        resultsDiv.appendChild(movieDiv);
                    });
                });
        }
    });
}
search();