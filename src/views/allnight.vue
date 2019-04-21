<template>
    <div id='all'>
        <b-container class="row-flex-cols">
          <b-row align-v="start" class = "first">
            <b-col>
          <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m1'></div></div>
                  <div slot="back"><div class="meat">Benz Burgers<br/>3 Kilburn Ln, Kensal Green, London W10 4AE
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart"></star-rating>
                  </div>
                </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m2'></div></div>
                  <div slot="back"><div class="meat">Pixxa<br/>8 St John St, Barbican, London EC1M 4AY
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart1"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m3'></div></div>
                  <div slot="back"><div class="meat">Star Kebab<br/>178 Earls Ct Rd, Kensington, London SW5 9QQ
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
                  <div slot="back"><div class="veg">Sexy Fish<br/>Berkeley Square House, Berkeley Square, Mayfair, London W1J 6BR
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart3"></star-rating>
                    
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v2'></div></div>
                  <div slot="back"><div class="veg">Diamond Grill<br/>e1, 1 Quaker St, Hackney, London E1 6SZ
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart4"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v3'></div></div>
                  <div slot="back"><div class="veg">Assenheims<br/>12 Smithfield St, Farringdon, London EC1A 9LA
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
                  <div slot="back"><div class ="fish">Balans Soho Society<br/>60-62 Old Compton St, Soho, London W1D 4UG
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart6"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f2'></div></div>
                  <div slot="back"><div class ="fish">Cafe Rimini<br/>47 Cranbourn St, London WC2H 7AN
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart7"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f3'></div></div>
                  <div slot="back"><div class ="fish">Comptoir Poilâne<br/>39 Cadogan Gardens, Chelsea, London SW3 2TB
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
      background-image:url(../images/allnight/an1.jpg);
      background-position:center;
    	background-repeat:no-repeat;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #m2{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an2.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #m3{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an3.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v1{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an4.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v2{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an5.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v3{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an6.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    
    #f1{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an7.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f2{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an8.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f3{
      width:200px;
      height:200px;
      background-image:url(../images/allnight/an9.jpg);
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