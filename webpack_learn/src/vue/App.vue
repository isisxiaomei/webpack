<style>
#hh {
  color: aqua;
}
</style>
<template>
  <div>
    <h2 id="hh">{{ message }}</h2>
    <button>btn</button>
    <Cpn></Cpn>
  </div>
</template>
<script>

import Cpn from "./Cpn.vue";

export default {
  data () {
    return {
      message: 'hello world'
    }
  },
  components: {
    Cpn
  }
}
</script>
