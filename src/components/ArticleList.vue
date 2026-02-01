<script setup>
import { getArticles } from '@/services/articleServices';
import { ref, onMounted } from 'vue';
import ArticleItem from './ArticleItem.vue';

const articleList = ref([]);

// onMount est un élément du cycle de vie d'un composant Vue qui s'exécute une fois que le composant est monté dans le DOM.
// C'est le moment pour effectuer des opérations asynchrones comme la récupération de données depuis une API.
onMounted(async () => {
    const response = await getArticles();
    articleList.value = response; // On met à jour la valeur de articleList avec les articles reçus (bien penser au .value pour les refs)
})
</script>

<template>
    <h2>Article List</h2>
    
    <!-- On boucle sur articleList via v-for -->
    <ArticleItem 
        v-for="(article, index) in articleList" 
        :key="index" 
        :title="article.title" 
        :description="article.body" />
</template>