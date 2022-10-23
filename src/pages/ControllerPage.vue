<template>
  <div>
    <ControllerBar
        :airport-name="airport.NAME"
        :airport-iata="airport.IATA"
        :airport-icao="airport.ICAO"
        :airport-city="airport.CITY"
        :airport-country="airport.COUTRY"
        :time="allBuses.current_time"
    />
    <v-main>
      <v-container fluid>
        <v-row class="controller-buses-row">
          <v-col cols="12" md="4" lg="4" xl="4" class="controller-col d-flex flex-column justify-space-between">
            <!--
              Upcoming buses
            -->
            <div class="controller-upcoming-buses-section justify-end">
              <div class="mb-2">
                Предстоящие ({{allBuses.data_answer_wait.length}})
              </div>

              <div class="controller-upcoming-buses-list pl-1">
                <div v-if="allBuses.data_answer_wait.length == 0 || allBuses.data_answer_wait == undefined"
                     class="text-left">
                  нет
                </div>
                <div
                    v-else
                    v-for="upcomingBus in 10"
                    :key="upcomingBus"
                    class="controller-upcoming-buses-list-item mb-2"
                >
                  <div
                      v-for="bus in allBuses.data_answer_wait"
                      :key="bus"
                      class="mb-2"
                  >
                    <ControllerBusCardInactive
                        v-on:click.native="toDialog"
                        class="controller-card"
                        :company-code="bus.airline_company"
                        :flight-number="bus.number_rais"
                        :airport-city="bus.airport_city"
                        :airport-code="bus.airport_code"
                        :task-type="bus.fly_type_landing"
                        :exit="bus.gate_type"
                        :gate="bus.type_gait_bus"
                        :buses="bus.connect_task"
                        :time-create="bus.time_create_action"
                        :date-create="bus.date_create_action"
                    />
                </div>
              </div>
            </div>

            <!-- Chat window -->
            <div class="controller-chat-section mt-8 ml-4">
              <ControllerChat />
            </div>
            </div>
          </v-col>

          <!-- Active buses -->

          <v-col cols="12" md="8" lg="8" xl="8"
                 class="controller-col order-first order-md-last order-lg-last order-xl-last">
            <div class="controller-active-buses-section">
              <div class="mb-2">
                Активные
                ({{allBuses.data_answer_active.length}})
              </div>
              <div v-if="allBuses.data_answer_active.length == 0 || allBuses.data_answer_active == undefined">
                нет
              </div>
              <div v-else class="controller-active-buses-list pr-1">
                <div
                    v-for="bus in allBuses.data_answer_active"
                    :key="bus"
                    class="mb-2"
                >
                  <ControllerBusCardActive
                      v-on:click.native="toDialog"
                      class="controller-card"
                      :company-code="bus.airline_company"
                      :flight-number="bus.number_rais"
                      :airport-city="bus.airport_city"
                      :airport-code="bus.airport_code"
                      :task-type="bus.fly_type_landing"
                      :exit="bus.gate_type"
                      :gate="bus.type_gait_bus"
                      :buses="bus.connect_task"
                      :time-create="bus.time_create_action"
                      :date-create="bus.date_create_action"
                  />
              </div>
            </div>
            </div>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </div>
</template>

<script>
import ControllerBar from "@/components/ControllerBar";
import CONFIG from "@/conf";
import API from "@/api";
import ControllerBusCardActive from "@/components/ControllerBusCardActive";
import ControllerBusCardInactive from "@/components/ControllerBusCardInactive";
import ControllerChat from "@/components/ControllerChat";

import axios from 'axios'

export default {
  name: "ControllerPage",
  components: {
    ControllerBusCardInactive,
    ControllerBusCardActive,
    ControllerBar,
    ControllerChat
  },
  data() {
    return {
      busDialog: false,
      api: API,
      airport: CONFIG.AIRPORT,
      allBuses: [],
      apiError: false
    }
  },
  methods: {
    toDialog() {
      /*
        call dialog box
       */
    },
    getAllBuses() {
      axios.get(this.api.ENDPOINT + this.api.CONTROLLER)
          .then((resp) => {
            this.allBuses = resp.data
            console.log(this.allBuses)
            this.apiError = false
            return resp.data
          })
          .catch((e) => {
            console.log(e)
            this.apiError = true
            return null
          })
          .then(() => {
            console.log('finished get buses')
          })
    }
  },
  mounted() {
    this.getAllBuses()

    setInterval(
        function run() {
          this.getAllBuses();
        }.bind(this),

        5000
    );
  },
  /*
  sockets: {
    connect() {
      console.log('socket connected')
    },
    customEmit() {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
    message(data) {
      this.currentStatus = data
      console.log(data)
    }
  }
  */
}
</script>

<style scoped>
.controller-card {
  cursor: pointer;
}

.controller-col {
  max-height: 95vh;
}

.controller-chat-section {
  height: 30%;
}

.controller-upcoming-buses-section {
  height: 70%;
}

.controller-upcoming-buses-list {
  height: 100%;
  overflow-y: auto;
  direction: rtl;
}

.controller-upcoming-buses-list-item {
  direction: ltr;
}

.controller-active-buses-section {
  height: 100%;
}

.controller-active-buses-list {
  height: 100%;
  overflow-y: auto;
}
</style>