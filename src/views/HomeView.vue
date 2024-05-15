
<script>
    import Movies from '@/components/Movies.vue';
    import {getMovie_NowPlaying} from '@/services/MoviesService.js';



    export default {
        components : {
            Movies,
        },
        data() {
            return {
                motCle:"",
                movies:null,
                //filterName:"",
            }
        },
        created() {
            getMovie_NowPlaying().then(response => this.movies = response)
            // getMovie_NowPlaying().then(response => console.log(response))
            
        },
        
        
    }
</script>

<template>
  <main class="container">
    <Movies :ObjectMovies="movies"  />
  </main>
   
</template>


<style lang="css" scoped>

</style>