<template>
  <v-row class="auth__wrapper">
    <v-col
      xl="6" md="5"
      class="auth__left-panel hidden-sm-and-down"
    />
    <v-col class="d-flex justify-center align-center">
      <div class="auth__title text-center">
        <h1>Amazon</h1>
        <router-view/>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import {Component, Vue} from 'vue-property-decorator'

  @Component({name: 'AuthLayout'})
  export default class AuthLayout extends Vue {

  }
</script>

<style lang="scss" scoped>
  .auth {
    &__wrapper {
      min-height: 100vh;
    }

    &__left-panel {
      height: 100vh;
      min-height: 100%;
      background-image: url('../assets/auth-img.jpg');
      background-size: cover;
    }
  }
</style>
