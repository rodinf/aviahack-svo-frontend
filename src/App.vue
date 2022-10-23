<template>
  <v-app id="app">
    <!-- debug
      {{$store.state.user}}
      <button @click="logout">logout</button>
    -->
    <vue-extend-layouts />
  </v-app>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'
import { logout } from "@/auth/logout";

export default {
  name: 'App',
  components: { VueExtendLayouts },
  methods: {
    logout
  }
}
</script>

<style>
#app {
  background-color: var(--v-background-base) !important;
}
</style>
