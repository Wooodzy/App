<template>
    <div id="body">
    <router-link class="button slide" to='type'><span>"Touch My Button"</span></router-link>
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
  width:100vw;
  height:100vh;
  left: 0;
  top: 0;
      
}

.button {
  color: #FFF;
  border: 2px solid #d85c81;
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  text-decoration:none;
  font-family: myFirstFont;
  font-size: 4em;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #d85c81;
  -webkit-transition: ease-out 1.5s;
  -moz-transition: ease-out 1.5s;
  transition: ease-out 1.5s;
}
/*
.slide:hover {
  box-shadow: inset 100vw 0 0 0 #d85c81;
}*/


.slide {
  position: relative;
  overflow: hidden;

}
span {
  position: relative;
  z-index: 3;
}

.slide:after {
  top: 0;
  content: "";
  width: 100%;
  position: absolute;
  left: -100%;
  background: #d85c81;
  height: 100%;
  transition: 0.5s all ease;  
  z-index: 1;
  
}
.slide:hover:after {
  left: 0;
}



</style>