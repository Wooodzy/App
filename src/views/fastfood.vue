<template>
    <div id='all'>
        <b-container class="row-flex-cols">
          <b-row align-v="start" class = "first">
            <b-col>
          <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m1'></div></div>
                  <div slot="back"><div class="meat">Honest Burgers - Soho <br/> Meard St, Soho, London W1F 0EF
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart"></star-rating>
                  </div>
                </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m2'></div></div>
                  <div slot="back"><div class="meat">BubblewrapWaffle<br/>24 Wardour St, London W1D 6QJ
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart1"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m3'></div></div>
                  <div slot="back"><div class="meat">Bubbledogs<br/>70 Charlotte St, Bloomsbury, London W1T 4QG
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
                  <div slot="back"><div class="veg">Spicy Grill London<br/>122 Golders Green Rd, Golders Green, London NW11 8HB
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart3"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v2'></div></div>
                  <div slot="back"><div class="veg">Pizza Pilgrims Soho<br/>11 Dean St, Soho, London W1D 3RP
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart4"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v3'></div></div>
                  <div slot="back"><div class="veg">Chang's Noodle<br/>35-37 New Oxford St, Bloomsbury, London WC1A 1BH
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
                  <div slot="back"><div class ="fish">Pizza Union<br/>25 Sandy's Row, Spitalfields, London E1 7HW
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHear6"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f2'></div></div>
                  <div slot="back"><div class ="fish">MEATmission<br/>15 Hoxton Market, Hackney, London N1 6HG
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart7"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f3'></div></div>
                  <div slot="back"><div class ="fish">Byron Islington<br/>341 Upper St, The Angel, London N1 0PB
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
      background-image:url(../images/fastfood/ff1.jpg);
      background-position:center;
    	background-repeat:no-repeat;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #m2{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff2.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #m3{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff3.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v1{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff4.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v2{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff5.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v3{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff6.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    
    #f1{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff7.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f2{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff8.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f3{
      width:200px;
      height:200px;
      background-image:url(../images/fastfood/ff9.jpg);
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