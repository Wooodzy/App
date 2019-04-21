<template>
    <div id='all'>
        <b-container class="row-flex-cols">
          <b-row align-v="start" class = "first">
            <b-col>
          <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m1'></div></div>
                  <div slot="back"><div class="meat"> Crumbs & Doilies<br/>1 Kingly Court, Carnaby St, Soho, London W1B 5PW 
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart"></star-rating>
                </div>
                </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m2'></div></div> 
                  <div slot="back"><div class="meat">My Old Dutch<br/>16 Kensington Church St, Kensington, London W8 4EP
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart1"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m3'></div></div>
                  <div slot="back"><div class="meat">El Camion<br/>25-27 Brewer St, Soho, London W1F 0RR
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart2"></star-rating>
                  </div>
                  </div>
                   </vue-flip>
                  </b-col>
        
        </b-row>
        <b-row align-v="center" class= "second">
        <b-col>
          <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v1'></div></div>
                  <div slot="back"><div class="veg">Gail's Bakery<br/>Unit C Neo-Bankside, 70 Holland St, London SE1 9NX
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart3"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v2'></div></div>
                  <div slot="back"><div class="veg">Vauxhall Street Food Garden<br/>6A S Lambeth Pl, Vauxhall, London SW8 1SP
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart4"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v3'></div></div>
                  <div slot="back"><div class="veg">Soho Vegan Market<br/>51-53 Rupert St, Soho, London W1D 7PQ
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart5"></star-rating>
                  </div>
                  </div>
                   </vue-flip>
                  </b-col>
                   </b-row>
                   <b-row align-v="end" class="third">
        <b-col>
          <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f1'></div></div>
                  <div slot="back"><div class ="fish">Vegan HQ<br/>50 St Mary's Rd, Ealing, London W5 5EU
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart6"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f2'></div></div>
                  <div slot="back"><div class ="fish">Taqueria<br/>141-145 Westbourne Grove, Notting Hill, London W11 2RS
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart7"></star-rating></div></div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f3'></div></div>
                  <div slot="back"><div class ="fish">Ms. Cupcake<br/>408 Coldharbour Ln, Brixton, London SW9 8LF
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart8"></star-rating>
                  </div></div>
                   </vue-flip>
                  </b-col>
                </b-col>
                   </b-row>
        </b-container>
        </div>

</template>

<script>
 import VueFlip from 'vue-flip';
  import StarRating from 'vue-star-rating'


    
    export default {
      name: "App",
      metaInfo: {
      title: 'Fooder',
    },
      components: {
          'vue-flip': VueFlip,
           StarRating
     },
      data (){
            return {
              activeOnClick: true,
               miniHeart: 0,
               miniHeart1:0,
               miniHeart2:0,
               miniHeart3:0,
               miniHeart5:0,
               miniHeart6:0,
               miniHeart7:0,
               miniHeart8:0,
            }
          },
          methods: {
            handleClick () {
              this.activeOnClick = false
            },
            doNothing (evt) {
              evt.stopPropagation()
            },
    
      }
    }


</script>


<style scoped>



   .front{
    font-family: myFirstFont;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }

  .back{
    font-family: myFirstFont;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content:space-between;
  }

    

    #App {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    
  #m1{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk1.jpg);
      background-position:center;
    	background-repeat:no-repeat;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #m2{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk2.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #m3{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk3.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v1{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk4.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v2{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk5.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v3{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk6.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    
    #f1{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk7.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f2{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk8.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f3{
      width:200px;
      height:200px;
      background-image:url(../images/snacks/snk9.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
      #all{
      background-color:#DD7596;
      width:100vw; /* vw stands for viewport width ( width of screen) */
      min-height: 100vh; /* vh stands for viewport height (height of screen) */
      left: 0;
      top: 0;
      
    }
    
    
      

</style>