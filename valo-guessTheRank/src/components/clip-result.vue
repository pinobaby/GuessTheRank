<template>
    <div
      class="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto"
      v-if="showModal"
    >
      <div class="modal-overlay fixed inset-0 bg-black opacity-50"></div>
  
      <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        el rango que seleccionaste fue: {{ rango }}
        el rango correcto es: {{ rangoCorrecto }}
        <div class="modal-content py-4 text-left px-6">
          <div class="modal-header mb-4">
            <h3 class="modal-title text-xl font-semibold">{{ title }}</h3>
            <button
              class="modal-close px-2 py-1 rounded-full hover:bg-gray-200 hover:text-gray-600"
              @click="closeModal"
            >
              X
            </button>
          </div>
          <div class="modal-body ">{{ body }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    props: {
      showModal: Boolean,
      title: String,
      body: String,
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>

  