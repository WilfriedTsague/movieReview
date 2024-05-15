<template>

    <!-- formulaire -->
   <div>
    <!-- Formulaire de recherche -->
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Rechercher un film..." v-model="searchQuery">
      <button class="btn btn-outline-secondary" type="button" @click="searchMovies">Rechercher</button>
    </div>
  </div>


     <!-- Liste des films -->

    <div class="row row-cols-1 row-cols-md-4 g-4" >
        <div class="col"  v-for="(movie,key) in paginatedMovies" :key="key">
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

    
    <!-- Pagination -->
    <nav aria-label="Pagination">
      <ul class="pagination justify-content-center mt-4">
        <li class="page-item" :class="{ 'disabled': pageNumber === 1 }">
          <button class="page-link" @click="prevPage">Précédent</button>
        </li>
        <li class="page-item" :class="{ 'disabled': pageNumber === totalPages }">
          <button class="page-link" @click="nextPage">Suivant</button>
        </li>
      </ul>
    </nav>

</template>

<script>
import FormSearchMovies from '@/components/FormSearchMovies.vue'; // Importez le composant FormSearchMovies
import { getMovie_Search } from '@/services/MoviesService.js';


    export default {
        components: {
            FormSearchMovies, // Ajoutez le composant FormSearchMovies ici
        },

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
                searchQuery: '',
                pageNumber: 1,
                totalPages: 229,
            }
        },
        computed: {
            // Liste des films paginée
            paginatedMovies() {
            const startIndex = (this.pageNumber - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            //console.log(this.ObjectMovies.total_pages);
            //console.log(this.filteredMovies.slice(0,4))
            return this.filteredMovies.slice(startIndex, endIndex);
            },

            // Liste des films filtrés en fonction de la recherche
            filteredMovies() {
            // Si la recherche est vide, retournez tous les films
            if (!this.searchQuery.trim()) {
                
            
                //console.log(this.ObjectMovies.results.slice(0,4))
                return this.ObjectMovies.results;
                //console.log(this.ObjectMovies.results.filter(movie => movie.original_title.toLowerCase().includes('kong')));
            }

            // Sinon, retournez les films correspondant à la recherche
            return this.ObjectMovies.results.filter(movie => movie.original_title.toLowerCase().includes(this.searchQuery.toLowerCase()));
            },
        },
         methods: {
    async searchMovies() {
      try {
        // Effectuer la recherche en utilisant la méthode getMovie_Search de votre service
        const response = await getMovie_Search(this.searchQuery,this.pageNumber);
        // Mettre à jour les résultats de la recherche
        this.ObjectMovies.results = response.results;
        this.totalPages = response.total_pages;

      
        // Réinitialiser la page actuelle à 1 après la recherche
        this.pageNumber = 1;
      } catch (error) {
        console.error('Erreur lors de la recherche de films :', error);
      }
    },
    // Aller à la page suivante
    nextPage() {
      if (this.pageNumber < this.totalPages) {
        this.pageNumber++;
      }
    },
    // Aller à la page précédente
    prevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
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