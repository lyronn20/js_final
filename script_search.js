function searchMovies() {
    // Récupérer l'élément de la barre de recherche
    var searchInput = document.getElementById('searchInput');

    // Ajouter un écouteur d'événement pour détecter les changements dans la barre de recherche
    searchInput.addEventListener('input', function() {
        // Récupérer la valeur de la barre de recherche
        var searchTerm = searchInput.value.toLowerCase();

        // Récupérer tous les éléments de film dans la page
        var movies = document.getElementsByClassName('movie');

        // Parcourir tous les éléments de film
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            var title = movie.textContent.toLowerCase();

            // Vérifier si le titre du film correspond au terme de recherche
            if (title.includes(searchTerm)) {
                // Afficher le film s'il correspond
                movie.style.display = 'block';
            } else {
                // Masquer le film s'il ne correspond pas
                movie.style.display = 'none';
            }
        }
    });
}
