const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
    }
};

fetch('https://api.themoviedb.org/3/account?session_id="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4"', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });