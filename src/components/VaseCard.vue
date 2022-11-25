
<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";
import ContactUs from "./ContactUs.vue";

const counterStore = useCounterStore();
const { count1,count2,count3,count4 } = storeToRefs(counterStore);
const { incrementVase1 , incrementVase2,incrementVase3,incrementVase4} = counterStore;
</script>
<template>
   
    <div class="hero">
         <h1>
       <span class="line1"> Handmade ~</span>
        <br/>
         <span  class="line2">ceramics</span>
         <br/>
         <span  class="line3">designed for <img src="../assets/Star_red.svg" width="50" height="50"/></span>
         <br/>
         <span class="line4"><img src="../assets/blob (3).svg" width="90" height="90"/> your everyday</span>
         </h1>
    
        
         <!-- <div  class="arrow">
         <img src="../assets/arrow.gif"  width="100"/>
       </div> -->
       </div>
       <div class="boxx"><img class="boxx1-img" src="../assets/ezgif-2-465d9892eb-removebg-preview.png" width="200" height="200" /></div>
         <div class="boxx2"><img class="boxx1-img" src="../assets/image-removebg-preview (2).png" width="250" height="250" /></div>
         <div class="boxx3"><img class="boxx1-img" src="../assets/image-removebg-preview (5).png" width="250" height="250" /></div>
         <div class="boxx4"><img class="boxx1-img" src="../assets/image-removebg-preview (1).png" width="250" height="250" /></div>
         <div class="boxx5"><img class="boxx1-img" src="../assets/image-removebg-preview (4).png" width="200" height="200" /></div>
         <div class="boxx6"><img class="boxx1-img" src="../assets/image-removebg-preview (3).png" width="200" height="260" /></div>
      
<div class="shop-button">
       <button class="button-home">  <router-link class="nav-link" to="/shop">SHOP</router-link> </button>
      </div>


      <div class="num-container">
        <div class="first-container">
        <p class="big-numbers">15+</p>
        <p class="big-numbers-title">new collections</p>
      </div>
      <div class="first-container">
        <p  class="big-numbers">20</p>
        <p class="big-numbers-title">new artists</p>
      </div>
      </div>
<!-- 
     <div class="container">
      
        <div class="box1">
      
         <div class="img-first-row">
          
           <div class="img1-container">
           <div class="addToCardBtn">
            <button class="button-54 " @click="incrementVase1"> add to cart{{ count1 }}</button>
           </div>
           </div>
           
   <div class="img2-container">
  <button class="button-54"  @click="incrementVase2"> add to cart{{ count2 }}</button>
 
 
    
         </div>
         </div>
      
         <div class="img-first-row">
           <div class="img3-container"><button class="button-54"  @click="incrementVase3"> add to cart{{ count3 }}</button></div>
             <div class="img4-container"><button class="button-54"  @click="incrementVase4"> add to cart{{ count4 }}</button>
            </div> 
         </div>
         <router-link class='continueToBagText' to="/order"> Continue to Bag</router-link>
        </div>
       <div class="box2">
         <div class="box2-container" ><h2>Vase</h2>
       <p class="vase-paragraph">Browse through a range of select pieces of vases and bowls that are sure to liven up your home. Be it from the rustic artistry of the KAFFEBÖNA line or the tasteful pairings of the ERTAPPAD dish and LIVSVERK vase which complement each other like wine and cheese. Or even snazz-up your dinner table with a centrepiece to die for, with the incredibly elegant and gorgeous pieces from the ANNANSTANS collection. You’ll find vases and bowls for every occasion or use, made from the most durable and environment-friendly material.</p>
       <button class="button-54 ">Read More</button>
       </div>
 
     </div> 
   >
     </div>

   -->
   
 <ContactUs/>
 
   </template>