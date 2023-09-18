<template class="lg:w-1/3 md:w-1/2 sm:w-3/4">
  <div class="flex flex-col items-center">
    <button class="w-32 md:w-32 lg:w-48 pt-10">
        <h1 class="text-white font-bold font text-2xl">VALORANT</h1>
         <viperIcon class="placeholder:cursor-pointer rounded-lg"/>
    </button>
     
  </div>
  <div class="flex flex-col items-center text-white font-bold text-xl space-y-3">
      <h1>Play Guess The Rank for Valorant</h1>
      <h1>You'll watch the clips and guess their ranks!!!</h1>
  </div>
  <div class="grid grid-cols-2 gap-3 items-center">
  <button  class="bg-green-700 hover:bg-green-400 rounded-md shadow-xl p-10"
  @click="$router.push({name:'chosse-the-rank'})">
      START
  </button>
  <button class=" bg-red-700 hover:bg-red-400 rounded-md shadow-xl p-10"
  @click="$router.push({name:'form'})">
      UPLOAD
  </button>     
  </div>

</template>
 <script setup>
 import viperIcon from '../components/icons/viper-icon.vue';
</script>
