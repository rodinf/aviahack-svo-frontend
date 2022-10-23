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
    <span>{{ time | getTimeFromUnix }} &nbsp; {{ time | getDateFromUnix }}</span>

    <v-btn @click="logout" text small>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script>
import moment from "moment"
import {logout} from "@/auth/logout";

moment.locale("ru")

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
      timeNavbar: null
    }
  },
  filters: {
    getTimeFromUnix: function (value) {
      if (value) {
        return moment.unix(value).format('H:MM:SS')
      }
    },
    getDateFromUnix: function (value) {
      if (value) {
        return moment.unix(value).format('DD.MM.YYYY')
      }
    }
  },

  methods: {
    logout,
  }
}
</script>

<style scoped>

</style>