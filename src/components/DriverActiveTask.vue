<template>
  <v-card>
    <v-card-title class="card-driver-header-title">
      {{ flight }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "DriverActiveTask",
  props: [
    'flight'
  ]
}
</script>

<style scoped>

</style>