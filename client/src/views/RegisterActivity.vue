<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-lg w-full">
      <div>
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >Iscriviti come Esercente!</h2>
      </div>
      <form class="mt-8 flex flex-col" v-on:submit.prevent="addNewActivity">
        <div class="flex flex-row justify-between mb-2">
          <label class="flex flex-row items-center" for="nameActivityInput">Nome Attività</label>
          <input class="flex-grow max-w-xs" v-model="nameActivity" id="nameActivityInput" placeholder="Nome attività" />
        </div>

        <div class="flex flex-row justify-between mb-2">
          <label class="flex flex-row items-center" for="phoneInput">Numero di telefono</label>
          <input class="flex-grow max-w-xs" v-model="phone" id="phoneInput" placeholder="Numero di telefono" />
        </div>

        <div class="flex flex-row justify-between mb-2">
          <label class="flex flex-row items-center" for="mailInput">E-mail</label>
          <input class="flex-grow max-w-xs" v-model="email" id="emailInput" placeholder="E-mail" />
        </div>

        <div class="flex flex-row justify-between mb-2">
          <label class="flex flex-row items-center" for="passwordInput">Password</label>
          <input class="flex-grow max-w-xs" type="password" v-model="password" id="passwordInput" placeholder="Password" />
        </div>

        <div class="flex flex-row justify-between mb-2">
          <label class="flex flex-row items-center" for="titleInput">Tipo di attività</label>
          <input class="flex-grow max-w-xs" v-model="title" id="titleInput" placeholder="Tipo Attività" />
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterActivity",
  data: () => ({
    nameActivity: "",
    phone: "",
    email: "",
    password: "",
    title: ""
  }),
  beforeMount() {},
  methods: {
    addNewActivity() {
      axios
        .post("/api/registerActivity", {
          nameActivity: this.nameActivity,
          phone: this.phone,
          email: this.email,
          password: this.password,
          title: this.title
        })
        .then(res => {
          (this.nameActivity = ""),
            (this.phone = ""),
            (this.email = ""),
            (this.password = ""),
            (this.title = "");
        })
        .catch(err => {
          console.log(err.response.data.error);
        });
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