<template>
    <div class="flex items-center justify-center">
      <div class="bg-white shadow-md rounded ">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Arrastra y suelta archivos aquí:</label>
          <div
            class="border-dashed border-2 border-gray-300 rounded-lg px-4 py-6 cursor-pointer"
            @dragover.prevent="dragover"
            @dragleave.prevent="dragleave"
            @drop.prevent="drop"
            :class="{ 'border-red-500': isDragging }"
          >
            <div v-if="!isDragging">
              <p class="text-gray-600 text-sm text-center">Arrastra y suelta archivos aquí o haz clic para cargar.</p>
            </div>
            <div v-else>
              <p class="text-red-500 text-sm text-center">Suelta los archivos aquí.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDragging: false,
      };
    },
    methods: {
      dragover() {
        this.isDragging = true;
      },
      dragleave() {
        this.isDragging = false;
      },
      drop() {
        this.isDragging = false;
        // Aquí puedes agregar la lógica para manejar los archivos que se han soltado
      },
    },
  };
  </script>
  
 


