export function logout() {
  this.$store.commit('setUserLoggedOut')

  this.$router.push("/auth")
}