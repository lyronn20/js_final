const apiKey = "498abcf5627f7da0c4e107319077ec46"

document.addEventListener('DOMContentLoaded', function() {
    // Utiliser le token de session stocké dans sessionStorage
    const sessionToken = localStorage.getItem('tmdbSessionId'); // Remplacez 'tmdbSessionId' par la clé correcte si nécessaire

    if (!sessionToken) {
        console.error('Aucun token de session trouvé. Redirection vers la page de connexion.');
        // Optionnel : rediriger l'utilisateur vers la page de connexion
        return;
    }

    const apiUrl = `https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${sessionToken}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('username').textContent = data.username;
            document.getElementById('account-id').textContent = data.id;
            document.getElementById('language').textContent = data.iso_639_1;
        })
        .catch(error => console.error('Erreur lors de la récupération des informations du compte:', error));
})