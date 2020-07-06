<template>
  <v-app id="inspire">
    <router-view/>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'App'
  })
  export default class App extends Vue {

  }
</script>

<style lang="scss" scoped>
  #inspire {
    overflow: hidden;
  }
</style>
