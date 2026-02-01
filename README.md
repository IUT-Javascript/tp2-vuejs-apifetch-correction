## Sujet du TP

L'objectif de ce TP est de migrer le TP1 en VueJS (à l'exception de l'ajout d'article depuis le formulaire car nous n'avons pas vu les évènements)

1) Créer une application vueJS

2) Les constantes sont à migrer un pour un. Attention à l'export des variables pour être importées dans vos fichiers.

3) Convertir le fichier log.js en un service `LogService`.

4) Mettre en place le composant ArticleForm et toute sa logique métier (à l'exception de la création d'un article, à la place on le log)

5) Mettre en place le composant `ArticleItem` qui sera affiché dans un composant `ArticleList`. La liste des articles est à charger dans `ArticleList` et chaque article est à passer à `ArticleItem`.

6) Pour tester l'affichage des articles, mettre en place un `ArticleService` avec une méthode `getArticles()` qui retourne une liste d'article définie (appelé un `stub`)

7) modifier la méthode ``getArticles`` pour qu'elle récupère des articles depuis l'API suivante : https://jsonplaceholder.typicode.com/posts

## Ressources

- Lien des slides : https://drive.google.com/drive/folders/1R6BkNNUlPlrSbfJyHJN7YgFyg-7p-65R?usp=drive_link
- Lien vers la documentation : https://developer.mozilla.org/fr/docs/Web/JavaScript
- Lien vers la document VueJS : https://vuejs.org/