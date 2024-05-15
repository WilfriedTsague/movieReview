<template>
  <div>
    <!-- Formulaire de recherche -->
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Rechercher un film..." v-model="searchQuery">
      <button class="btn btn-outline-secondary" type="button" @click="searchMovies">Rechercher</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ObjectMovies: {
      type: Object,
      default: () => ({}),
    },
    movies: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchQuery: '',
      pageNumber: 1,
    };
  },
 
 
};
</script>

<style lang="css" scoped>
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.card {
  height: 100%;
}
</style>
