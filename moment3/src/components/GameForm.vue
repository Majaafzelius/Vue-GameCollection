<template>
    <div>
      <h2 class="subtitle">Lägg till Spel</h2>
      <form class="form" @submit.prevent="addGame">
        <label class="label" for="name">Namn: </label>
        <input class="input" type="text" id="name" v-model="newGame.name" required><br>

        <label class="label" for="price">Pris: </label>
        <input class="input" type="number" id="price" step="0.01" min="0" v-model="newGame.price" required><br>

        <label class="label" for="platform">Platform: </label>
        <input class="input" type="text" id="platform" v-model="newGame.platform" required><br>

        <label class="label" for="owned">Äger? </label>
        <input class="checkbox" type="checkbox" id="owned" v-model="newGame.owned"><br>
        <button class="button" type="submit">Lägg till</button>
      </form>
    </div>
    
  </template>
  
  <script>
  import DataService from './DataService.vue';
  
  
  export default {
    mixins: [DataService],
    data() {
      return {
        newGame: {
          name: '',
          price: 0,
          platform:'',
          owned:true,
        },
      };
    },
    methods: {
      addGame() {
        this.addData(this.newGame)
          .then(response => {
            // Uppdatera användarlistan med den nya användaren
            this.$emit('game-added', response.data);
            // Återställ formuläret
            this.newGame = {
              name: '',
              price: 0,
              platform:'',
              owned:true,
            };
            // this.games.push(response.data);
          })
          .catch(error => {
            console.error('Fel vid lägg till spel:', error);
          });
      },
    },
  };
  </script>
  <style scoped>
    .input {
      margin-bottom: 20px;
    }
    .button:hover {
      background-color: rgb(181, 236, 170);
    }
  </style>