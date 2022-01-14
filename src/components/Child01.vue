<template>
  <div class="box">
    <h2>Child01</h2>
    <input v-model="msg" type="text">
    <button @click="send">发布消息</button>
  </div>
</template>

<script>
export default {
  name: 'Child01',
  data(){
    return{
      msg:"默认消息"
    }
  },
  methods:{
    send(){
      this.$myEvents.myPub("btnMsg",this.msg)
    }
  }
}
</script>

<style scoped>

</style>
