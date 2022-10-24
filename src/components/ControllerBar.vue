<template>
  <v-system-bar
      window
  >
    <span class="hidden-sm-and-down">
      {{ airportName }}
    </span>

    &nbsp;

    <span v-if="airportIata">
      {{airportIata}}
    </span>

    &nbsp;

    <span v-if="airportIcao">
      ({{airportIcao}})
    </span>

    <span
        v-if="airportCity && airportCountry"
        class="hidden-sm-and-down ml-4"
    >
      <v-icon small class="ma-0">
        mdi-map-marker
      </v-icon>
      {{ airportCity }}, {{ airportCountry }}
    </span>

    <v-spacer></v-spacer>
    <span>{{ timeNavbarTime }} &nbsp; {{ timeNavbarDate }}</span>

    <v-btn @click="logout" text small>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script>
import moment from "moment"
import 'moment-timezone'
import {logout} from "@/auth/logout";

moment.locale("ru")
moment.tz("Europe/Moscow").format()

export default {
  name: "ControllerBar",
  props: [
    'airportName',
    'airportIata',
    'airportIcao',
    'airportCity',
    'airportCountry',
    'time'
  ],
  data () {
    return {
      timeNavbarTime: null,
      timeNavbarDate: null,
      timeNavbarUnix: null
    }
  },
  methods: {
    getTimeFromUnix: function (value) {
      if (value) {
        return moment.unix(value - 10800).tz("Europe/Moscow").format('hh:mm:ss')
      }
    },
    getDateFromUnix: function (value) {
      if (value) {
        return moment.unix(value - 10800).tz("Europe/Moscow").format('DD.MM.YYYY')
      }
    },
    logout,
  },

  watch: {
    time: function() {
      this.timeNavbarUnix = this.time
      this.timeNavbarTime = this.getTimeFromUnix(this.time)
      this.timeNavbarDate = this.getDateFromUnix(this.time)
    }
  }
}
</script>

<style scoped>

</style>