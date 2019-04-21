<template>
  <div class='full-height'>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
  .full-height{
    height: 100vh;
    width: 100vw;
  }

  @font-face {
    font-family: myFirstFont;
    src: url(MOD20.TTF);
  }
.vue-star-rating-star {
    width: 80%;
    display:flex;
     align-items:center;
     margin:auto!important;
  
}

.meat{
      width:200px;
      height:200px;
      background-image:url(./images/slatebg.jpg);
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
      background-image:url(./images/slatebg.jpg);
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
      background-image:url(./images/slatebg.jpg);
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


.first{
        height:100vh;
        width:50%;
        background:#404E5C;
        position: relative;
        float:left;
        box-shadow: 0 0 8px 0 #404E5C, 0 0 0 0 #404E5C;
        padding: 20px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }

       .second{
         height:100vh;
         width:50%;
         background:#B7C3F3;
         position: relative;
        padding: 20px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
          
      }

  .third{
        height:100vh;
        width:50%;
        background:#4F6272;
        position: relative;
        float:right;
        box-shadow: 0 0 8px 0 #4F6272, 0 0 0 0 #4F6272;
        padding: 20px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
      
       .content{
      align-items: center;
      justify-content: center;
      left:25%;
      position: relative;
     }


   
     .row-flex-cols{
      display:flex;
      height: 100%;
      max-width: 990px;
      margin: 0 auto;
    }

      .card{
    display:flex;
    position:relative;
    align-self:center;
    margin: 25px auto 25px auto;
    }


@media  (max-width: 767px) {
  .row-flex-cols {
    flex-direction: column;
  }
  
.first, .second, .third {
  width: 100% !important; /* Should never use important, but due to lazy this is a quick fix */
  height: auto !important;
}
  
}
</style>
