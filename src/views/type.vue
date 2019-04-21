<template>
    <div id='all'>
            <b-container class="row-flex-cols">
              <b-row align-v="start" class = "first">
                <b-col>
              <div class="card">
                      <router-link id='m1' to='allnight'></router-link>
                      <div id="App">
                    </div>
                    </div>
                    </b-col>
                    <b-col>
                      <div class="card">
                      <router-link  id='m2' to='fastfood'></router-link>
                      <div id="App">
                      </div>
                    </div>
                    </b-col>
                     <b-col>
                      <div class="card">
                      <router-link  id='m3' to='cafe'></router-link>
                      <div id="App">
                      </div>
                       </div>
                      </b-col>
            </b-row>
            <b-row align-v="center" class= "second">
            <b-col>
              <div class="card">
                      <router-link  id='v1' to='restaurant'></router-link>
                      </div>
                    </b-col>
                    <b-col>
                      <div class="card">
                      <router-link  id='v2' to='snacks'></router-link>
                    </div>
                    </b-col>
                     <b-col>
                      <div class="card">
                      <router-link  id='v3' to='spec'></router-link>
                       </div>
                      </b-col>
                       </b-row>
                    <b-row align-v="end" class="third">
                    <b-col>
                      <div class="card">
                      <router-link  id='f1' to='street'></router-link>
                    </div>
                    </b-col>
                    <b-col>
                      <div class="card">
                      <router-link  id='f2' to='tour'></router-link>
                    </div>
                    </b-col>
                     <b-col>
                      <div class="card">
                      <router-link  id='f3' to='popup'></router-link>
                       </div>
                      </b-col>
                       </b-row>
            </b-container>
    </div>
</template>


<script>
    
    export default {
      name: "App",
      metaInfo: {
      title: 'Fooder',
    }
      };
      


</script>


<style scoped>
    
    .card:hover{

    opacity:0.5;
      
    }
    

    
    #m1{
      width:200px;
      height:200px;
      background-image:url(../images/type/allnight.jpg);
      background-position:center;   
      background-repeat:no-repeat;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #m2{
      width:200px;
      height:200px;
      background-image:url(../images/type/fastfood.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #m3{
      width:200px;
      height:200px;
      background-image:url(../images/type/cafe.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    }
    #v1{
      width:200px;
      height:200px;
      background-image:url(../images/type/rest.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v2{
      width:200px;
      height:200px;
      background-image:url(../images/type/snacks.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v3{
      width:200px;
      height:200px;
      background-image:url(../images/type/spec.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    
    
    #f1{
      width:200px;
      height:200px;
      background-image:url(../images/type/street.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f2{
      width:200px;
      height:200px;
      background-image:url(../images/type/tour.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f3{
      width:200px;
      height:200px;
      background-image:url(../images/type/popup.jpg);
      background-position:center;
      background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
     #all{
      background-color:#DD7596;
      position: fixed;
      width:100%;
      height: 100%;
      left: 0;
      top: 0;
      
    }
   
    

</style>
