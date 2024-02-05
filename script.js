const cleApi = "498abcf5627f7da0c4e107319077ec46"
const cleTokenAcces = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4"

async function getNewTMDBToken(){
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OThhYmNmNTYyN2Y3ZGEwYzRlMTA3MzE5MDc3ZWM0NiIsInN1YiI6IjY1YWZiYmE5YWFkOWMyMDBlYTkyMmY4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzhbI1yd9zU7kFSVdQqBRGd4EGyeTeF5bo7MatnSRv4'
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/authentication/token/new', options ).catch(err => console.error(err))
    let newResponse = await response.json()
    return newResponse;

        

}
async function redirectUserToSSO(){
    const response = await getNewTMDBToken();
    console.log(response)
    location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://127.0.0.1:5500`
    
}

window.onload = () => {
    console.log(location.search)
    if(location.search.includes('request_token')){
        console.log(location.search.split('request_token'))
    }
}


/*const cleApi = "498abcf5627f7da0c4e107319077ec46"
const ssoTmdbReadApiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTlkNjk0NzFlMTBhYTU3NDY0N2ZkYzE4Yjg5NGVkZSIsInN1YiI6IjY1YWZiYzIzNjdiNjEzMDBlYjUzNjY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ajlOwMY9nYr33KukjUdZci-MCjCJ7wEBwRtYr0Fbr9Q'

// verifie si un token est dans le lien d'accès, stocke le token et reload la page 
window.onload = async () => {
    if (!location.search.includes('request_token=')) {
        return
    }

    let token = location.search.split('request_token=')[1]?.split('&')?.[0]

    if(token) {
        getNewSession(token)
        .then(sessionData => {
            sessionStorage.setItem('tmdbSessionId', sessionData.session_id)
            sessionStorage.setItem('tmdbSessionToken', token)
            location.href = 'http://127.0.0.1:5500' //reload dans la barre de navigation
        })
        .catch(err => {
            console.error(err);
            location.href = 'http://127.0.0.1:5500'
        })
    }
}


// Cette fonction verifie qu'un token existe et redirige l'utilisateur vers le lien tmdb pour valider le token
async function redirectUserToSSO() {
    let tokenData = await getNewTMDBToken()
    if (!tokenData.success) {
        return alert('Une erreur est survenue et je ne peux pas vous identifier')
    }
    location.href = `https://www.themoviedb.org/authenticate/${tokenData.request_token}?redirect_to=http://127.0.0.1:5500`
}

// Cette fonction fait une requete a tmdb pour obtenir  un token vierge a faire valider par le user

async function getNewTMDBToken() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ssoTmdbReadApiKey}`
        }
    };

    let tokenRequest = await fetch('https://api.themoviedb.org/3/authentication/token/new', options).catch(err => console.error('error:' + err));
    if (!tokenRequest) {
        return
    }

    let tokenData = await tokenRequest.json()

    return tokenData;
}


async function getNewSession(token) {
    const options = {
        method: 'POST', 
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${ssoTmdbReadApiKey}`
        },
        body: JSON.stringify({request_token: token})
    };

    let sessionRequest = await fetch('https://api.themoviedb.org/3/authentication/session/new', options).catch(err => console.error('error:' + err));
    if (!sessionRequest) {
        return
    }

    let sessionData = await sessionRequest.json()
    console.log(sessionData)
    return sessionData
}*/

//ssoTmdbReadApiKey: C'est une clé d'API utilisée pour authentifier les requêtes à l'API TMDB.
//Fonctions:
//1. redirectUserToSSO:
//Cette fonction est appelée pour rediriger l'utilisateur vers la page d'authentification de TMDB.
//Elle appelle la fonction getNewTMDBToken pour obtenir un nouveau jeton d'authentification TMDB.
//Si la requête réussit, l'utilisateur est redirigé vers une URL de TMDB avec le nouveau jeton d'authentification.
//2. getNewTMDBToken:
//:Cette fonction effectue une requête à l'API TMDB pour obtenir un nouveau jeton d'authentification.
//Elle utilise la clé d'API (ssoTmdbReadApiKey) dans les en-têtes pour authentifier la requête.
//La fonction renvoie les données du jeton obtenues en réponse à la requête.
//3. getNewSession(token):
//Cette fonction prend un jeton en paramètre et effectue une requête à l'API TMDB pour créer une nouvelle session d'authentification.
//Elle utilise le jeton passé en paramètre dans le corps de la requête et la clé d'API dans les en-têtes pour authentifier la requête.
//La fonction renvoie les données de session obtenues en réponse à la requête.
//4. window.onload:
//Cette partie du code est exécutée lorsque la fenêtre est complètement chargée.
//Elle vérifie si le paramètre de recherche de l'URL contient la chaîne 'request_token='.
//Si c'est le cas, elle extrait le jeton de la chaîne de recherche, appelle getNewSession pour créer une nouvelle session, stocke certaines informations dans la session du navigateur et recharge la page.
//Comment cela fonctionne:
//Lorsque la page est chargée, le code vérifie si un jeton est présent dans l'URL.
//:Si un jeton est trouvé, il est utilisé pour créer une nouvelle session en appelant l'API TMDB.
//Les données de session sont stockées dans la session du navigateur, et la page est rechargée.
//Si aucun jeton n'est trouvé dans l'URL, la page reste inchangée.
//Il y a également une fonction (redirectUserToSSO) qui peut être appelée pour rediriger l'utilisateur vers la page d'authentification de TMDB.
//Ce code semble être une implémentation de l'authentification à l'aide de tokens avec l'API TMDB dans le contexte d'une application web. 
