<script>
import Movies from '@/components/Movies.vue';
import FormSearchMovies from '@/components/FormSearchMovies.vue'; // Importez le composant FormSearchMovies
import { getMovie_Search } from '@/services/MoviesService.js';

export default {
  components: {
    Movies,
  },
  data() {
    return {
      movies: null,
    }
  },
  
  created() {
    // Chargez les films au chargement de la page
    getMovie_Search().then(response => this.movies = response)
    //console.log(response)
    //getMovie_Search().then(response => console.log(response))
  },
}
</script>

<template>
  <main class="container">
    <!-- Composant d'affichage des films -->
      <Movies :ObjectMovies="movies"  />
      
  </main>
</template>

<style lang="css" scoped>
/* Vos styles CSS */
</style>
