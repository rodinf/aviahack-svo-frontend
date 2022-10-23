<template>
  <v-card>
    <v-card-text class="card-driver-header-title pt-2 pb-2 d-flex">
      <v-spacer />
      <div>
        {{ fio }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DriverHeader",
  props: [
      'fio'
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