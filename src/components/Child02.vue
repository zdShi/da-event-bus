<template>
  <div class="box">
    <h2>Child02</h2>
    <h4>接收到的消息是:{{receive}} </h4>
  </div>
</template>

<script>
export default {
  name: 'Child02',
  data(){
    return{
      receive: "",
      subToken: null
    }
  },
  mounted() {
    this.subToken = this.$myEvents.mySub("btnMsg", msg => {
      this.receive = msg
    })
  },
  beforeDestroy() {
    this.$myEvents.removeSub("btnMsg", this.subToken)
  }
}
</script>

<style scoped>

</style>
