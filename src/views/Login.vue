<template>
  <div class="login">
    <div class="my-4">Witaj ponownie</div>
    <LoginForm />
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import LoginForm from '@/components/LoginForm.vue';

  @Component({name: 'Login',
    components: {LoginForm}
  })
  export default class Login extends Vue {

  }
</script>

<style lang="scss" scoped>
  .login {
    min-height: 100%;
  }
</style>
