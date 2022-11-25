<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const { count1,count2,count3,count4 } = storeToRefs(counterStore);
const { incrementVase1 , incrementVase2,incrementVase3,incrementVase4} = counterStore;
</script>
<template>
    <span  class="star-shop"><img src="../assets/Star_red.svg" width="100" height="100"/></span>

  <!-- <div class="shop-page-box"></div>
  <img class='blob-shop' src="../assets/blob (3).svg" width="200" height="200"/> -->
  <!-- <div class="shop-page-box2"></div> -->
  <p class="shop-order-now-text">ORDER NOW </p>
<div class="container-shop-page">

  <div class="box1">

   <div class="img-first-row">
   <div class="img1-container"><button class="button-shop"  @click="incrementVase1"> add to cart{{ count1 }}</button> </div>
<div class="img2-container"><button  class="button-shop"   @click="incrementVase2"> add to cart{{ count2 }}</button>
   </div>
   </div>

   <div class="img-first-row">
     <div class="img3-container"><button class="button-shop"   @click="incrementVase3"> add to cart{{ count3 }}</button></div>
       <div class="img4-container"><button class="button-shop"  @click="incrementVase4"> add to cart{{ count4 }}</button>
      </div> 
   </div>
   
  </div>

 <!-- <div class="box2">
   <div class="box2-container" ><h2>Vase</h2>
 <p class="vase-paragraph">Browse through a range of select pieces of vases and bowls that are sure to liven up your home. Be it from the rustic artistry of the KAFFEBÖNA line or the tasteful pairings of the ERTAPPAD dish and LIVSVERK vase which complement each other like wine and cheese. Or even snazz-up your dinner table with a centrepiece to die for, with the incredibly elegant and gorgeous pieces from the ANNANSTANS collection. You’ll find vases and bowls for every occasion or use, made from the most durable and environment-friendly material.</p>
 <button class="button-54 ">Read More</button>
 </div> -->

<!-- </div>  -->

</div>
<div class="continueToBagTextContainer">
<router-link class='continueToBagText' to="/order"> Continue to Bag</router-link>
</div>
</template>