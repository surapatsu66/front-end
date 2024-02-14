const env = require("../components/env.js")
const apiConfig = require("../components/ApiurlToken.js")[env];
// export async function getAllMovies() {
//     try{
//         const response = await fetch('http://localhost:3001/api/movies/all');
//         return await response.json();
//     }catch(error) {
//         return [];
//     }


// }

// export async function getAllMovies() {
//     try{
//         const response = await fetch('http://localhost:3001/api/movies/');
//         //const response = await fetch('/api/movie/all');
//         return await response.json();
//     }catch(error) {
//         return [];
//     }
    
// }


// export async function createMovie(data) {
//     const response = await fetch('http://localhost:3001/api/movie', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({movie: data})
//       })
//     return await response.json();
// }



export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users');
         const response = await fetch(`${apiConfig.API_URL}/api/movie/all`, {
            headers: {
                Authorization: `Bearer ${apiConfig.bearerToken}`,
            },
         });
        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

//---- ยังไม่เสร็จ ----
export async function createMovie(data) {
    const response = await fetch(`${apiConfig.API_URL}/api/movie/insert`, {
        method: 'POST',
        headers: {
            headers: {'Content-Type': 'application/json'},
            Authorization: `Bearer ${apiConfig.bearerToken}`,
        },
        body: JSON.stringify({...data})
      });
    return await response.json();
}