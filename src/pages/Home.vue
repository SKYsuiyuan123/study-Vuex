<template>
  <div class="Home">
    <list-one></list-one>
    <list-two></list-two>
  </div>
</template>

<script>
import listOne from '../components/listOne'
import listTwo from '../components/listTwo'

export default {
  data () {
    return {}
  },
  components: {
    listOne,
    listTwo
  }
}
</script>

<style scoped>
</style>
