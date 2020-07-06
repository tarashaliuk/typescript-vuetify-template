<template>
  <div>
    <Navigation :drawer="drawer"/>
    <Header @toggleNavigation="drawer = !drawer"/>
    <v-main>
      <router-view/>
    </v-main>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Navigation from '../components/Navigation.vue';
  import Header from '../components/Header.vue';
  import axios from 'axios';

  @Component({
    name: 'MainLayout',
    components: {
      Header,
      Navigation
    }
  })
  export default class MainLayout extends Vue {
    private drawer: boolean = false
  }
</script>

<style scoped>

</style>
