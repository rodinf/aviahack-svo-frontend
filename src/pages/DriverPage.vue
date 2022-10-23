<template>
  <div>
    <v-main>
      <v-container>
        <DriverHeader
          :fio="fio"
          class="mb-10"
        />

        <DriverActiveTask
          flight="SU1205"
          class="mb-10"
        />

        <DriverUpcomingTask
          flight="AF3240"
        />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import DriverHeader from "@/components/DriverHeader";
import DriverActiveTask from "@/components/DriverActiveTask";
import DriverUpcomingTask from "@/components/DriverUpcomingTask";

export default {
  name: "DriverPage",
  components: {
    DriverHeader,
    DriverActiveTask,
    DriverUpcomingTask
  },
  data () {
    return {
      fio: 'Родин Федор Михайлович'
    }
  }
}
</script>

<style scoped>

</style>