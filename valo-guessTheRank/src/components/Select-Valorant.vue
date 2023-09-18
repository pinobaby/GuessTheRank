<template class="lg:w-1/3 md:w-1/2 sm:w-3/4">
   <div class="flex flex-col items-center ">

       <button class="w-32 md:w-32 lg:w-52 pt-10"
       @click="$router.push({name:'playGuess'})">
           <NeonNeaked class="placeholder:cursor-pointer absolute w-32 md:w-32 lg:w-52 pt-10 rounded-lg"/>
           <NeonIcon class="hover:animate-pulse placeholder:cursor-pointer w-32 md:w-32 lg:w-52 pt-10 rounded-lg absolute"/>
           <h1 class=" text-white font-bold font text-4xl">VALORANT</h1>
        </button>
        
    </div>
</template>

<script setup>
import NeonIcon from './icons/neon-icon.vue';
import NeonNeaked from './icons/neon-neaked.vue';
</script>