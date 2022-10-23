<template>
  <div>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ config.SYS_NAME }} — {{ config.AIRPORT.NAME }}
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import CONFIG from "@/conf";

export default {
  name: 'AuthLayout',
  data () {
    return {
      config: CONFIG
    }
  }
}
</script>

<style scoped>

</style>