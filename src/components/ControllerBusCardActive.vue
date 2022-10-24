<template>
  <v-card>
    <v-card-title class="pb-1">
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

    <v-card-text>
      <div class="ml-2 mb-1">
        <span v-if="taskType == 'arrival'" class="mr-2">Прилёт:</span>
        <span v-else-if="taskType == 'departure'" class="mr-2" >Вылет:</span>
        {{timeCreate}} &nbsp; {{dateCreate}}
        <!--<span class="ml-10">{{pax}} пассажиров</span>-->
      </div>
      <div>
        <v-chip v-for="bus in buses" :key="bus" class="ma-1">
          <span class="font-weight-bold mr-2">{{ bus.bus_raider_connect.bus_con.number_gos }}</span>
          ({{ bus.bus_raider_connect.bus_con.size_people}} чел.)
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ControllerBusCardActive",
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

<style scoped>

</style>