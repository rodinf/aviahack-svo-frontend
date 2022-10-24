<template>
  <v-card>
    <v-card-title class="pt-2 pb-0 card-inactive-title text--secondary">
      <!--<v-chip small class="mr-4"/>-->

      <v-icon v-if="taskType == 'departure'">mdi-airplane-takeoff</v-icon>
      <v-icon v-else-if="taskType == 'arrival'">mdi-airplane-landing</v-icon>

      <span class="ml-6">
        {{ companyCode }} {{ flightNumber }}
      </span>

      <span class="ml-6 text--secondary">
        {{ airportCity }} <span v-if="taskType == 'departure'">{{ airportCode }}</span>
      </span>

      <v-spacer />

      <span>
        {{ exit }}
        <span class="text--secondary ml-2">{{ gate }}</span>
      </span>
    </v-card-title>
    <v-card-text class="pt-1 pb-2 card-inactive-text text--secondary">
      <div class="ml-1">
        <span v-if="taskType == 'arrival'" class="mr-2">Прилёт:</span>
        <span v-else-if="taskType == 'departure'" class="mr-2" >Вылет:</span>
        {{timeCreate}} &nbsp; {{dateCreate}}
        <!--<span class="ml-10">{{pax}} пассажиров</span>-->
      </div>
      <div>
        <v-chip v-for="bus in buses" :key="bus" small class="ma-1">
          <span class="font-weight-bold mr-2">{{ bus.bus_raider_connect.bus_con.number_gos }}</span>
          ({{ bus.bus_raider_connect.bus_con.size_people}} чел.)
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ControllerBusCardInactive",
  props: [
    'companyCode',
    'flightNumber',
    'airportCode',
    'airportCity',
    'taskType',
    'exit',
    'gate',
    'buses',
    'timeCreate',
    'dateCreate',
    'pax'
  ]
}
</script>

<style lang="scss">
@import "vuetify/src/styles/settings/colors";

.card-inactive-title {
  font-size: 1rem;
}
.card-inactive-text {
  font-size: 0.75rem;
}
</style>