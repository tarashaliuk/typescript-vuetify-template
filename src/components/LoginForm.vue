<template>
  <div class="login-form">
    <v-form>
      <v-text-field
        label="Email"
        v-model="form.email"
        :rules="rules.email"
      />
      <v-text-field
        label="Password"
        v-model="form.password"
        :rules="rules.password"
      />
      <div class="text-right mb-3">
        <router-link :to="{name: 'ResetPassword'}">
          Zapomniałem hasła
        </router-link>
      </div>
      <div class="d-flex justify-space-between">
        <v-btn :to="{name: 'Registration'}">Zarejestruj</v-btn>
        <v-btn color="primary">Zaloguj</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ILoginForm from '@/types/ILoginForm';
  import {maxCount, required} from '@/utils/validationRules';

  @Component({name: 'LoginForm'})
  export default class LoginForm extends Vue {
    private form: ILoginForm = {
      email: '',
      password: ''
    }
    private rules = {
      email: [required, this.maxCount],
      password: [required]
    }
    maxCount(value: string) {
      return maxCount(value, 10)
    }

  }
</script>

<style lang="scss" scoped>
  .login-form {
    min-width: 300px;
  }
</style>
