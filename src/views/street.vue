<template>
    <div id='all'>
        <b-container class="row-flex-cols">
          <b-row align-v="start" class = "first">
            <b-col>
          <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m1'></div></div>
                  <div slot="back"><div class="meat">High Street Fruit & Veg London <br/>77 Deptford High St, Deptford, London SE8 4AA
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart"></star-rating>
                </div>
                </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m2'></div></div>
                  <div slot="back"><div class="meat">Café Caribbean<br/>Brushfield St, Spitalfields, London E1 6AA
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart1"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='m3'></div></div>
                  <div slot="back"><div class="meat">Dinerama<br/>19 Great Eastern St, Hackney, London EC2A 3EJ
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
                  <div slot="back"><div class="veg">Bánh Mì Hội-An <br/>242 Graham Rd, London E8 1BP
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart3"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v2'></div></div>
                  <div slot="back"><div class="veg">Maltby Street Market<br/>37 Maltby St, London SE1 3PA
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart4"></star-rating>
                  </div>
                  </div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='v3'></div></div>
                  <div slot="back"><div class="veg">TIFINBOX<br/>14 Harrow Pl, Spitalfields, London E1 7DB
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
                  <div slot="back"><div class ="fish">Hawker House<br/>Canada St, Rotherhithe, London SE16 7PJ
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart6"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f2'></div></div>
                  <div slot="back"><div class ="fish">Pepe Italian Street Food<br/>57 St Martin's Ln, Covent Garden, London WC2N 4EA
                  <star-rating :show-rating="false":rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]":star-size="20"v-model="miniHeart7"></star-rating>
                  </div></div>
                </vue-flip>
                </b-col>
                 <b-col>
                  <vue-flip :active-click="true" class="card" width="200px" height="200px">
                  <div slot="front"><div id='f3'></div></div>
                  <div slot="back"><div class ="fish">Hiba Street Food<br/>10 Tottenham St, Marylebone, London W1T 4RD
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

    

    
    .meat{
      width:200px;
      height:200px;
      background-image:url(../images/slatebg.jpg);
      font-family: myFirstFont;
      font-size:18px;
      color: white;
      align-items: center;
      justify-content:center ;
      border-radius: 15px;
      line-height:150%;
      text-align:center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    }

    .veg{
      width:200px;
      height:200px;
      background-image:url(../images/slatebg.jpg);
      font-family: myFirstFont;
      font-size:18px;
      color: white;
      align-items: center;
      justify-content:center ;
      border-radius: 15px;
      line-height:150%;
      text-align:center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

     
      .fish{
      width:200px;
      height:200px;
      background-image:url(../images/slatebg.jpg);
      font-family: myFirstFont;
      font-size:18px;
      color: white;
      align-items: center;
      justify-content:center ;
      border-radius: 15px;
      line-height:150%;
      text-align:center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
      background-image:url(../images/street/str1.jpg);
      background-position:center;
    	background-repeat:no-repeat;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #m2{
      width:200px;
      height:200px;
      background-image:url(../images/street/str2.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    #m3{
      width:200px;
      height:200px;
      background-image:url(../images/street/str3.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v1{
      width:200px;
      height:200px;
      background-image:url(../images/street/str4.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v2{
      width:200px;
      height:200px;
      background-image:url(../images/street/str5.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #v3{
      width:200px;
      height:200px;
      background-image:url(../images/street/str6.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    
    #f1{
      width:200px;
      height:200px;
      background-image:url(../images/street/str7.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f2{
      width:200px;
      height:200px;
      background-image:url(../images/street/str8.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    #f3{
      width:200px;
      height:200px;
      background-image:url(../images/street/str9.jpg);
      background-position:center;
    	background-size:200px 200px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
     #all{
      font-family: myFirstFont;
      font-size:108px;
      color: white;
      background-color:#DD7596;
      position: fixed;
      width:100%;
      height: 100%;
      left: 0;
      top: 0;
      
    }
    

</style>