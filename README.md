## Sujet du TP

1) Modifier la méthode `createArticle` pour qu'elle affiche un article avec le code HTML suivant `<article data-id="$ID" class="article"><span>$TITLE</span><p>$DESCRIPTION</p></article>`. L'ID de l'article devra être déduit par rapport au plus grand ID de la page.

2) Mettre en place une chaîne de caractères JSON représentant une liste d'article (composé d'un id, d'un titre et d'une description). Au chargement de la page, les articles JSON devront être parsés pour être intégrés au sein de la page (dans la div ayant pour l'id newsList).

3) Au clic sur le bouton "Export all articles", il faudra récupérer l'intégralité des articles présents sur la page, les convertir en objet js et les convertir en JSON. Le résultat sera affiché dans la console.

4) En arrivant sur la page, récupérer la liste des articles via un appel HTTP à cette URL https://6797ded3c2c861de0c6e4858.mockapi.io/articles et les afficher

5) Au clic sur le bouton "Export all articles", pour chaque article présent sur la page, effectuer un appel HTTP à l'URL https://6797ded3c2c861de0c6e4858.mockapi.io/articles pour créer une nouvel article sur l'API.

## Exception et JSON

- Les erreurs en JavaScript : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Error
- Convertir une chaine JSON en objet : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
- Convertir un objet en chaine JSON : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

## API Fetch et Async

- Async : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
- Promise : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise
- API Fetch : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch

## Ressources

- Lien des slides : https://drive.google.com/drive/folders/1R6BkNNUlPlrSbfJyHJN7YgFyg-7p-65R?usp=drive_link
- Lien vers la documentation : https://developer.mozilla.org/fr/docs/Web/JavaScript