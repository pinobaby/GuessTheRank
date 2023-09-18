<template class="lg:w-1/3 md:w-1/2 sm:w-3/4">
    <div class="flex justify-center items-center p-10">
       <video play class="w-auto h-96">
        <source src="/src/assets/Auto-clip-Headshot-kill.mp4" type="video/mp4">
       </video>
    </div>
    <div class="flex flex-row justify-center items-center gap-3 ">
        <iron3sIcon class="w-20  hover:animate-pulse    hover:w-24 h-24 hover:transition-all"/>
        <bronze3Icon class="w-20 hover:animate-pulse   hover:w-24 h-24 hover:transition-all"/>
        <silver3Icon class="w-20 hover:animate-pulse   hover:w-24 h-24 hover:transition-all"/>   
        <gold3Icon class="w-20 hover:animate-pulse hover:w-24 h-24 hover:transition-all"/> 
        <platinium3Icon class="w-20 hover:animate-pulse    hover:w-24 h-24 hover:transition-all"/>  
        <diamond3Icon class="w-20 hover:animate-pulse  hover:w-24 h-24 hover:transition-all"/>   
        <ascendant3Icon class="w-20 hover:animate-pulse    hover:w-24 h-24 hover:transition-all"/>
        <inmortal3Icon class="w-20 hover:animate-pulse hover:w-24 h-24 hover:transition-all "/>
        <radiantIcon class="w-20 hover:animate-pulse   hover:w-24 h-24 hover:transition-all "/>
        <clipResult/>
    </div>
    <div>

    </div>
</template>
<script setup>

import iron3sIcon from '../components/icons/iron3-icon.vue'
import bronze3Icon from '../components/icons/bronze3-icon.vue'
import silver3Icon from '../components/icons/silver3-icon.vue'
import gold3Icon from '../components/icons/gold3-icon.vue'
import platinium3Icon from '../components/icons/plat3-icon.vue'
import diamond3Icon from '../components/icons/diamond3-icon.vue'
import ascendant3Icon from '../components/icons/ascendant3-icon.vue'
import inmortal3Icon from '../components/icons/inmortal3-icon.vue'
import radiantIcon from '../components/icons/radiant-icon.vue'
import clipResult from '../components/clip-result.vue'

</script>
