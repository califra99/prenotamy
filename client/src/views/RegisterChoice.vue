<template>
  <div class="flex flex-row justify-center h-screen bg-gray-200">
    <div class="flex flex-col w-1/3 ">
      <div
        class="uppercase flex flex-row justify-center text-4xl pt-8 pb-12"
      >Che tipo di utente sei?</div>
      <div class="flex flex-row justify-between">
        <div
          v-for="section in sections"
          v-bind:key="section.type"
          class="bg-white flex flex-col h-full uppercase p-5 pb-5 bg-gray-400"
          :class="{'bg-indigo-600': currentChoice == section.url}"
          v-on:click="changeChoice(section.url)"
        >
          <img class="rounded-full h-32 w-32 object-cover" :src="section.img" />

          <div class="flex flex-row justify-center py-8 text-xl">{{section.type}}</div>
        </div>
      </div>
      <div class="flex flex-col px-4">
        <button 
        v-on:click="changePage()"
        class="bg-indigo-600 text-lg text-center p-4 rounded-lg my-3 uppercase" :disabled="isDisable"
        >
          Avanti
        </button>

        <button 
        v-on:click = "annulla()"
        class="bg-gray-300 text-lg p-4 rounded-lg uppercase bg-gray-600">Annulla</button>
      </div>
    </div>
  </div>
</template>
<script>
import VueRouter from "vue-router";
import { routes } from "@/utils/routes";
export default {
  name: "RegisteChoice",
  data: () => ({
    path: [],
    sections: [
      {
        type: "un'attività",
        img:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
        url: "/registerActivity"
      },
      {
        type: "un utente",
        img:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        url: "/registerUser"
      } 
    ],
    currentChoice: {},
    isDisable: true
  }),

  beforeMount() {},
  methods: {
    changeChoice(link) {
      console.log(this.isDisable)
      this.currentChoice = link;
      this.isDisable = false;
      console.log(this.isDisable)
    },
    annulla() {
      this.currentChoice = {};
      this.isDisable = true;
    },
    changePage() {
      this.$router.push(this.currentChoice)
    }
  },
  components: {},
  watch: {
    $route: {
      handler() {}
    }
  }
};
</script>
<style></style>