<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import LayoutPage from '../src/layout/layout-page.vue'

</script>

<template>
  <header>

    <div class="wrapper">
      <LayoutPage/>
      
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/playGuess">playGuess</RouterLink> -->
      
    </div>
  </header>

  <RouterView />
</template>

