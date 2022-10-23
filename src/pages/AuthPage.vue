<template>
  <v-row class="mt-12 justify-center">
    <v-card class="rounded-lg">
      <v-card-title>
        Вход в систему
      </v-card-title>

      <v-card-text>
        <v-tabs centered icons-and-text>
          <v-tabs-slider hidden />

          <v-tab
              v-for="user in userTypes"
              :key="user.type"
              @click="selectedUser = user"
          >
            {{ user.name }}
            <v-icon>
              {{ user.icon }}
            </v-icon>
          </v-tab>
        </v-tabs>
      </v-card-text>

      <v-card-text
        v-if="selectedUser"
      >
        <div v-if="selectedUser == userTypes.driver">
          <v-text-field
              v-model="userId"
              label="Введите ID"
              placeholder="1234"
              outlined
              clearable
              type="number"
              counter="4"
          ></v-text-field>
          <v-btn
            color="primary" block elevation="0"
            :disabled="userId == null || userId == '' || userId == undefined"
            @click="login(selectedUser.type, userId, selectedUser.link)"
          >
            Вход
          </v-btn>
        </div>

        <div v-else-if="selectedUser == userTypes.controller">
          <v-btn
              color="primary" block elevation="0"
              @click="login(selectedUser.type, null, selectedUser.link)"
          >
            Вход
          </v-btn>
        </div>

        <div v-else-if="selectedUser == userTypes.manager">
          <v-btn
              color="primary" block elevation="0"
              @click="login(selectedUser.type, null, selectedUser.link)"
          >
            Вход
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { login } from "@/auth/login";

export default {
  name: "AuthView",
  data () {
    return {
      selectedUser: undefined,
      userId: null,
      userTypes: {
        'manager': {
          type: 'manager',
          name: 'Менеджер',
          icon: 'mdi-account',
          link: '/manager'
        },
        'controller': {
          type: 'controller',
          name: 'Диспетчер',
          icon: 'mdi-airport',
          link: '/controller'
        },
        'driver': {
          type: 'driver',
          name: 'Водитель',
          icon: 'mdi-bus',
          link: '/driver'
        },
      }
    }
  },
  mounted() {
    this.selectedUser = this.userTypes.manager
  },
  methods: {
    login
  },
  /* mixins: [
    require('@/auth/login')
  ], */
}
</script>

<style scoped>

</style>