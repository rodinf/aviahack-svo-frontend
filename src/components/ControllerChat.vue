<template>
  <v-card style="height: 100%">
    <v-card-text class="d-flex flex-column justify-space-between">
      <div>
        {{ data }}
      </div>
      <div class="justify-end">
        <v-text-field
          label="Сообщение"
          disabled
          append-icon="mdi-send"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ControllerChat",
  props: [
      'data'
  ]
}
</script>

<style scoped>

</style>