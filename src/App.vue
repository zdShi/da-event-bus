<template>
  <div id="app">
    <h1>App Component</h1>
    <div>
      <Child01/>
      <Child02/>
    </div>
  </div>
</template>

<script>
import Child01 from "@/components/Child01";
import Child02 from "@/components/Child02";


export default {
  name: 'App',
  components: {
    Child01,
    Child02
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 1px solid silver;
}
#app>div{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.box{
  width: 400px;
  height: 100px;
  border: 2px solid red;
}
</style>
