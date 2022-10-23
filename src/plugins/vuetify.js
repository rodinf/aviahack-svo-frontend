import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    dark: false,
    options: { customProperties: true },
    themes: {
      light: {
        primary: colors.orange.accent3,
        primaryLight: colors.orange.lighten4,
        primaryAccent: colors.orange.accent2,
        background: '#eeeeee'
      },
      dark: {
        primary: colors.orange.accent3,
        primaryLight: colors.orange.lighten4,
        primaryAccent: colors.orange.accent2,
        background: '#0000000'
      },
    },
  },
});
