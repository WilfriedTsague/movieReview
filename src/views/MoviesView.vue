<script>
import Movies from '@/components/Movies.vue';
import FormSearchMovies from '@/components/FormSearchMovies.vue'; // Importez le composant FormSearchMovies
import { getMovie_Search } from '@/services/MoviesService.js';

export default {
  components: {
    Movies,
    FormSearchMovies, // Ajoutez le composant FormSearchMovies ici
  },
  data() {
    return {
      movies: null,
    }
  },
  methods: {
    handleSearch(query) {
      // Utilisez la méthode getMovie_Search pour effectuer la recherche
      getMovie_Search(query).then(response => {
        // Mettez à jour la propriété movies avec les résultats de la recherche
        this.movies = response.results;
      }).catch(error => {
        console.error('Erreur lors de la recherche de films :', error);
      });
    }
  },
  created() {
    // Chargez les films au chargement de la page
    getMovie_Search().then(response => this.movies = response)
    getMovie_Search().then(response => console.log(response))
  },
}
</script>

<template>
  <main class="container">
    <!-- Composant de recherche -->
    <FormSearchMovies @searchMovies="handleSearch"  />

    <!-- Composant d'affichage des films -->
    <Movies :ObjectMovies="{ results: movies }" />
  </main>
</template>

<style lang="css" scoped>
/* Vos styles CSS */
</style>
