import Vue from "vue";

import Datepicker from "vuejs-datepicker";
import Loading from "@/components/Loading.vue";
import AwesomeTable from "@/components/AwesomeTable.vue";
import AwesomeForm from "@/components/AwesomeForm.vue";
import Searchbar from "@/components/SearchBar.vue";
import Spinner from "@/components/Spinner.vue";

Vue.component("datepicker", Datepicker);
Vue.component("loading", Loading);
Vue.component("awesome-table", AwesomeTable);
Vue.component("awesome-form", AwesomeForm);
Vue.component("search-bar", Searchbar);
Vue.component("spinner", Spinner);