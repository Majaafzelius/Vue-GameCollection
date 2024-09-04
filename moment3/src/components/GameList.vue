<template>
      <div class="view">
      <h2 class="subtitle">Lista på spel</h2>
      <table class="table is-striped is-mobile">
        <thead class="thead">
          <tr>
            <th>Namn på Spel</th>
            <th>Pris</th>
            <th>Platform</th>
            <th>Äger?</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="has-background-info-light">
          <tr v-for="game in games" :key="game.id">
            <td>
                {{ game.name }}
            </td>
            <td>
                {{ game.price }}€             
            </td>
            <td>
                {{ game.platform }}
            </td>
            <td>
              {{ game.owned ? 'true' : 'false' }}
            </td>
            <td>
                <button class="button" @click="deletegame(game.id)">Ta bort</button>
            </td>
          </tr>
        </tbody>
        
      </table>
    
    <GameForm @game-added="updategamelist"></GameForm>
  </div>
  </template>
  
  <script>
  import DataService from './DataService.vue';
  import GameForm from './GameForm.vue';
  
  export default {
    mixins: [DataService],
    components:{GameForm},
    data() {
      return {
        games: this.data,
      };
    },
    mounted() {
      this.fetchData()
        .then(response => {
          this.games = response.data;
        })
        .catch(error => {
          console.error('Fel vid hämtning av data:', error);

        });
    },
    methods: {
      updategamelist(newGame) {
        this.games.push(newGame);
      },
      deletegame(gameId) {
        this.deleteData(gameId)
          .then(() => {
            // Uppdatera användarlistan efter radering
            this.games = this.games.filter(game => game.id !== gameId);
          })
          .catch(error => {
            console.error('Fel vid radering av Spel:', error);
          });
      },
    }}

  </script>
<style scoped>
.button:hover {
  background-color: rgb(238, 184, 184);
}
.thead {
  background-color: rgb(189, 226, 231);
}
</style>