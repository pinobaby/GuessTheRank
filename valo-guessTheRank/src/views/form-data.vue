     <template class="lg:w-1/3 md:w-1/2 sm:w-3/4">
    <div class="flex items-center justify-center p-6">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-1/3 md:w-1/2 sm:w-3/4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Nickname:</label>
          <input
            v-model="nickname"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ingrese su nickname"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Rango:</label>
          <select
            v-model="rango"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

            
              <option value="Iron">Iron</option>
              <option value="Bronze">Bronze</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Platinium">Platinium</option>
              <option value="Diamond">Diamond</option>
              <option value="Ascendant">Ascendant</option>
              <option value="Inmortal">Inmortal</option>
              <option value="Radiant">Radiant</option>

          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Subir Video:</label>
            <DragAndDrop class="flex "/>
        </div>
        <div class="flex items-center justify-center">
          <button
            @click.prevent="submitForm"
            class="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
import DragAndDrop from '../components/DragAnd-Drop.vue';

  export default {
    data() {
        return {
            user: {
                nickname: '',
                rank: '',
                video: null,
            },
        };
    },
    methods: {
        submitForm() {
            // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
            axios.post('http://localhost:3000/api/users', this.user)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(this.user);
        },
        handleFileUpload(event) {
            // Aquí puedes manejar la subida de archivos
            this.user.video = event.target.files[0];
        },
    },
    components: { DragAndDrop }
};
  </script>
  

  
 