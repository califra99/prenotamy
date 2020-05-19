<template>
  <div class="flex flex-row w-8/12">
    <input
      class="form-control rounded p-4 py-6 bg-white border rounded-r-none w-10/12"
      type="search"
      placeholder="Cerca l'attività di cui hai bisogno e prenota!"
      v-model="search"
      @keyup.enter="searchIt()"
    />
    <button class="w-2/12 bg-gray-300 border-none rounded rounded-l-none" @click="searchIt()">
      <i class="fas fa-search text-gray-700"></i>
    </button>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import { routes } from "@/utils/routes";
export default {
  name: "search-bar",
  data: () => ({
    search: ""
  }),

  methods: {
    searchIt() {
      this.$store.state.search = this.search;
      this.$router.push("/findActivity");
    }
  },

  computed: {}
};
</script>