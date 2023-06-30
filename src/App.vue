<template>
  
  <router-view v-slot="{ Component }">
    <component :is="Component" />

    <NAV :name="this.$router.currentRoute._value.path"></NAV>

  </router-view>
  
</template>

<script>

import { defineComponent } from "vue";

//comps
import NAV from '../src/components/NAV.vue'

export default defineComponent({
  name: "App",
  components: {
    NAV
  },
  data() {
    return {
      
    };
  },

  methods: {},
  mounted(){
    
    //get country code and redirect to relevant subsite
    if (sessionStorage.getItem("BrowserCountry") == null){
      try {

        console.log("Ran country scan")

        fetch("https://ipapi.co/country/")
        .then(response => {
            if (response.ok) {
            return response.text();
            } else {
            console.log("error: " + response.status)
            }
        })
        .then(country => {
            console.log("Your country is: " + country)

            sessionStorage.setItem("BrowserCountry", country);
            
            if (country != "DK") {
            this.$router.push('/en/home');
            } else {
            this.$router.push('/da/home');
            }

        })
        .catch(function(error) {
            console.log("ERROR: api endpoint did not return lang-code: " + error);
        });

        } catch (error) {
        console.error("ERROR: Couldn't get info for langauge redirect: " + error)
        }
    }
    }

}
);


</script>