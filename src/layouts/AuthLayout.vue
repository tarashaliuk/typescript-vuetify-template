<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'

  @Component({name: 'AuthLayout'})
  export default class AuthLayout extends Vue {

  }
</script>

<style scoped>

</style>
