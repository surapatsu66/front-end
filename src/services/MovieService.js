export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users');
         const response = await fetch('https://api.se-rmutl.net/api/movie/all');
        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
//http://localhost:3001/api/movie/insert
//---- ยังไม่เสร็จ ----
export async function createMovie(data) {
    const response = await fetch(`https://api.se-rmutl.net/api/movie/insert`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...data})
      })
    return await response.json();
}
