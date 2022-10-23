export function login(type, id, goto) {
  this.$store.commit('setUserLoggedIn')

  this.$store.commit('setUserType', type)
  this.$store.commit('setUserId', id)

  this.$router.push(goto)
}