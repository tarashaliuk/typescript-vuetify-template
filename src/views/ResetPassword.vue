<template>
  <div class="login">
    <div class="my-4">Przypomnij hasło</div>
<!--    <LoginForm />-->
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  // import LoginForm from '@/components/LoginForm.vue';

  @Component({name: 'ResetPassword',
    // components: {LoginForm}
  })
  export default class ResetPassword extends Vue {

  }
</script>

<style lang="scss" scoped>
  .login {
    min-height: 100%;
  }
</style>
