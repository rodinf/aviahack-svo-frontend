<template>
  <v-card>
    <v-card-title class="card-driver-header-title pt-1 pb-1 text--secondary">
      <div>
        {{ flight }}
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "DriverUpcomingTask",
  props: [
    'flight'
  ]
}
</script>

<style scoped>
.card-driver-header-title {
  font-size: 1rem;
}
.card-driver-header-text {
  font-size: 0.75rem;
}
</style>