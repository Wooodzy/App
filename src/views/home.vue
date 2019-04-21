<template>
    <div id="body">
    <router-link class="button slide" to='type'> enter</router-link>
    </div>
</template>

<script>

    export default {
    name: "app",
    metaInfo: {
      title: 'Fooder',
    },
    }

</script>


<style scoped>



#body {
  margin:0;
  background-color:#191919;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:myFirstFont;
  width:100%;
  height: 100%;
  left: 0;
  top: 0;
      
}

.button {
  color: #FFF;
  border: 2px solid #d85c81;
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: myFirstFont;
  font-size: 4em;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #d85c81;
  -webkit-transition: ease-out 0.7s;
  -moz-transition: ease-out 0.7s;
  transition: ease-out 0.7s;
}

.slide:hover {
  box-shadow: inset 400px 0 0 0 #d85c81;
}

</style>