<template>
  <layout-normal v-if="isAuth"/>
  <layout-auth v-else/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LayoutNormal from '@/components/layout/nomal.vue'
import LayoutAuth from '@/components/layout/auth.vue'

@Component({
  components: {
    LayoutNormal, LayoutAuth
  }
})
export default class App extends Vue {
  isAuth = false
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
