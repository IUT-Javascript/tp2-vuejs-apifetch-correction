# TP Vue.js - Migration et API

## 🎯 Objectif

Migrer le TP1 (Vanilla JavaScript) en **Vue.js** en intégrant une architecture modulaire avec services et composants.

> 📌 **Note** : L'ajout d'articles depuis le formulaire ne sera pas implémenté pour le moment (nous verrons les événements en tant que suite)

---

## 📝 Étapes à réaliser

### 1️⃣ Créer une application Vue.js
Initialiser le projet Vue.js avec la structure de base

### 2️⃣ Migrer les constantes
Transférer les constantes du TP1 un pour un
- ⚠️ **Attention** : Bien exporter les variables pour pouvoir les importer dans vos fichiers

### 3️⃣ Créer un service LogService
Convertir le fichier `log.js` en service réutilisable avec les mêmes fonctionnalités

### 4️⃣ Implémenter le composant ArticleForm
Mettre en place le composant `ArticleForm` avec toute sa logique métier
- 📌 Pour l'instant: log l'article au lieu de le créer (création TP suivant)

### 5️⃣ Implémenter les composants ArticleItem et ArticleList
- Créer le composant `ArticleItem` : affiche les détails d'un article
- Créer le composant `ArticleList` : affiche la liste complète
- Architecture: `ArticleList` charge les articles et les passe à `ArticleItem`

### 6️⃣ Mettre en place un ArticleService avec des données de test
Créer un `ArticleService` avec une méthode `getArticles()`
- Retourne une liste d'articles définie (appelée un **stub**)
- Permet de tester l'affichage sans API

### 7️⃣ Connecter à l'API réelle
Modifier la méthode `getArticles()` pour récupérer les articles depuis:
```
https://jsonplaceholder.typicode.com/posts
```

---

## 📚 Ressources utiles

| Ressource | Lien |
|-----------|------|
| **Slides du cours** | [Google Drive](https://drive.google.com/drive/folders/1R6BkNNUlPlrSbfJyHJN7YgFyg-7p-65R?usp=drive_link) |
| **Documentation MDN** | [Developer.mozilla.org](https://developer.mozilla.org/fr/docs/Web/JavaScript) |
| **Documentation Vue.js** | [vuejs.org](https://vuejs.org/) |