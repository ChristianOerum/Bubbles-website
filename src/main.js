import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import Vuex from 'vuex';

//main state store
const store = createStore({

    // this.$store.state.lager
      state: {
          lang: ""
      }
    })

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import './assets/tailwind.css'
import './assets/css/custom-font.css';

library.add(fas)

createApp(App)
.use(store)
.use(router)
.use(autoAnimatePlugin)
.use(Vuex)
.component("fa", FontAwesomeIcon)
.mount('#app')
