<template>


    <div class="row row-cols-1 row-cols-md-4 g-4" >
        <div class="col"  v-for="(movie,key) in ObjectMovies.results.slice(0,3)" :key="key">
            <div class="card">
                <img v-bind:src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" class="card-img-top" alt="Image du film 1">
                <div class="card-body">
                    <h5 class="card-title">{{ movie.original_title }}</h5>
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">{{ movie.overview }}</p>
                    <p class="card-text"><strong>Note : </strong>
                        <span class="text-warning">
                            {{movie.vote_average}} \10
                        </span>
                    </p>
                    <p class="card-text">  <strong> Date de sortie :  </strong> {{ movie.release_date}}</p>
                    <a href="#" class="btn btn-primary">Détails</a>
                </div>
            </div>
        </div>
        
    </div>

    <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ 'disabled': pageNumber === 1 }">
                <button class="page-link" @click="prevPage">Précédent</button>
                </li>
                
                <li class="page-item" :class="{ 'disabled': pageNumber === totalPages }">
                <button Class="page-link" @click="nextPage">Suivant</button>
                </li>
            </ul>
        </nav>
    
</template>

<script>
    export default {
        props: {
            ObjectMovies: {
                type: Object,
                default: ()=>[],
            },
            movies:
            {
                type:Array,
                default: ()=>[],
            },
            pageSize: {
            type: Number,
            required: false,
            default: 5,
            },
            
        },

        data() {
            return {
                title: "movies",
                selectedMovie : null,
                pageNumber : 1,
                totalPages : this.ObjectMovies.total_pages,
            }
        },
        methods: {
            changepage(page){
                this.pageNumber = page ;
            },
            nextPage() {
                if (this.pageNumber < this.totalPages) {
                this.pageNumber++;
                    // Vous devrez implémenter une méthode pour charger les films de la page actuelle ici
                }
            },
            prevPage() {
                if (this.pageNumber > 1) {
                this.pageNumber--;
                    // Vous devrez implémenter une méthode pour charger les films de la page actuelle ici
                }
            },
        },

        
    }
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