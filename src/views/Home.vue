<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue'

  @Component({
    name: 'Home',
    components: {HelloWorld}
  })
  export default class Home extends Vue {
  }
</script>
