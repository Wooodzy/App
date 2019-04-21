<template>
    <div id='all'>
        <b-container class="row-flex-cols">
          <b-row align-v="start" class = "first">
            <b-col>
          <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m1'></div></div>
                  <div slot="back"><div class="meat">Dumplings' Legend<br/>15-16 Gerrard St, London W1D 6JE
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart"></star-rating>
                </div>
                </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m2'></div></div>
                  <div slot="back"><div class="meat">Fancy Сrab<br/>92 Wigmore St, Marylebone, London W1U 3RD
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart1"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m3'></div></div>
                  <div slot="back"><div class="meat">Copita<br/>27 D'Arblay St, Soho, London W1F 8EP
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
                  <div slot="back"><div class="veg">Applebees Fish<br/>5 Stoney St, London SE1 9AA
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart3"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v2'></div></div>
                  <div slot="back"><div class="veg">Patty&Bun<br/>54 James St, Marylebone, London W1U 1HE
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart4"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v3'></div></div>
                  <div slot="back"><div class="veg">J Sheekey<br/>33-35 St Martin's Ct, Covent Garden, London WC2N 4AL
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
                  <div slot="back"><div class ="fish">The River Café<br/>Thames Wharf, Rainville Rd, Hammersmith, London W6 9HA
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart6"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f2'></div></div>
                  <div slot="back"><div class ="fish">Dip & Flip Battersea<br/>87 Battersea Rise, London SW11 1HW
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart7"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f3'></div></div>
                  <div slot="back"><div class ="fish">Manna<br/>4 Erskine Rd, Primrose Hill, London NW3 3AJ
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
      background-image:url(../images/rest/rest1.jpg);
      background-position:center;
    	background-repeat:no-repeat;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #m2{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest2.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #m3{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest3.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v1{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest4.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v2{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest5.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v3{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest6.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    
    #f1{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest7.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f2{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest8.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f3{
      width:200px;
      height:200px;
      background-image:url(../images/rest/rest9.jpg);
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