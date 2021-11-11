<template>
  <div id="app">
    <h1 class="dynamic">dynamic components</h1>
    <!-- <signin /> -->
    <!-- <signup /> -->
    <component v-bind:is="cmp"></component>
    <button v-on:click="updatecmp('signin')">load signin</button>
    <button v-on:click="updatecmp('signup')">load signup</button>
  </div>
</template>

<script>
import signin from './components/signin.vue'
import signup from './components/signup.vue'
export default {
  name: 'App',
  components: {
    'signin':signin,
    'signup':signup
  },
  data() {
    return {
      cmp: 'signup'
    }
  },
  methods: {
    updatecmp(item) {
      this.cmp=item
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.dynamic {
  color: yellowgreen;
}
</style>