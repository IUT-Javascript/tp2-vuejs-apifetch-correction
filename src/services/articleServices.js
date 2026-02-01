export async function getArticles() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json();
    
    // Méthode fetch pour récupérer les articles depuis une API fictive
    // Utilisation du then pour gérer la promesse retournée par fetch
    // Dans ce cas pas besoin de mettre la méthode en async/await
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error => {
    //         console.error('Error fetching articles:', error);
    //         throw error;
    //     }); 
}