<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/"  class="nav-link">Accueil</RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink to="/movies" class="nav-link">Movies</RouterLink>
            </li> -->
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" placeholder="Recherche" aria-label="Recherche">
            <button class="btn btn-outline-success" type="submit">Recherche</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
