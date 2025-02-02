async function getArticlesFromApi(){
    const response = await fetch(ARTICLES_API);
    const json = await response.json();

    return json;
}

async function postArticleFromApi(article){
    if(!article.title)
        throw new Exception('Le titre est obligatoire');
    
    if(!article.description)
        throw new Exception('La description est obligatoire');

    const response = await fetch(ARTICLES_API,  {
                                    method: "POST",
                                    headers: {
                                    "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(article)
                                });
    const json = await response.json();

    return json;
}