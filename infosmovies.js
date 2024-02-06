let token = location.search.split('movie.html')[1]?.split('&')?.[0];

getInfosMovie(token){
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
        }
}; 
fetch('https://api.themoviedb.org/3/movie/movie_id?language=fr-FR', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}