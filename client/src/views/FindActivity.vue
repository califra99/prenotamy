<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col w-8/12">
      <div class="uppercase text-center text-4xl py-5">i tuoi risultati</div>
      <div class="flex flex-row justify-center">
        <div class="flex flex-row w-8/12">
          <input
            class="form-control rounded p-4 py-6 bg-white border rounded-r-none w-10/12"
            type="search"
            placeholder="Cerca l'attività di cui hai bisogno e prenota!"
            v-model="searched"
            @keyup="searchItAgain()"
          />
          <button
            class="w-2/12 bg-gray-300 border-none rounded rounded-l-none"
            @click="searchItAgain()"
          >
            <i class="fas fa-search text-gray-700"></i>
          </button>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <spinner v-if="spin"></spinner>
      </div>
      

      <div v-if="isEmpty" class="text-center text-xl p-3 uppercase">Nessun risultato</div>

      <div
        v-for="activity in activities"
        :key="activity.nameActivity"
        class="flex flex-row justify-between rounded-md shadow py-4 px-3 my-2 bg-white h-30 w-full"
      >
        <div class="flex flex-row items-center">
          <i
            v-for="(star, index) in [1,2,3,4,5]"
            :key="index"
            class="mx-1"
            :class="star > 3 ? 'far fa-star text-yellow-300' : 'fas fa-star text-yellow-300'"
          ></i>
        </div>
        <h1 class="text-2xl text-gray-800 semibold">{{activity.nameActivity}}</h1>
        <h2 class="text-lg text-gray-600">{{activity.phone}}</h2>
        <p class="text-gray-500">* note importanti</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FindActivity",

  data: () => ({
    activities: [],
    isEmpty: false,
    searched: "",
    spin: false
  }),
  methods: {
    searchIt() {
      this.spin=true
      this.searched = this.$store.state.search;
      let query = this.$store.state.search;
      axios
        .get("/api/findActivity?q=" + query)
        .then(data => {
          this.activities = data.data;
          if (data.data.length == 0) {
            this.isEmpty = true;
          }
        })
        .catch(err => {
          console.log(err.message);
        });
        this.spin=false;
    },

    searchItAgain() {
      this.isEmpty = false;
      this.spin = true;
      let query = this.searched;
      axios
        .get("/api/findActivity?q=" + query)
        .then(data => {
          this.activities = data.data;
          if (data.data.length == 0) {
            this.isEmpty = true;
          }
        })
        .catch(err => {
          console.log(err.message);
        });
        this.spin=false
    }
  },
  beforeMount() {
    this.searchIt();
  }
};
</script>

<style>
</style>