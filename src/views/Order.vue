<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const { count1, count2 ,count3,count4} = storeToRefs(counterStore);
</script>
<template>
 
  <h1>Your order</h1>
  
    <div class="container">
     
      <!-- <div class="boxx"><img class="boxx1-img" src="../assets/ezgif-2-465d9892eb-removebg-preview.png" width="200" height="200" /></div> -->
      <div class="box1-order">
       <div class="img-first-row">
    
         <div class="img1-container" >
          <span> {{ count1 }}</span>
         </div>
      
 <div class="img2-container">
  <span>  {{ count2 }}</span>

       </div>
       <div class="img3-container">
        <span>  {{ count3 }}</span>
       </div>
           <div class="img4-container">
            <span>  {{ count4 }}</span>
          </div> 
       </div>
       <div class="img-first-row">
         <!-- <div class="img3-container"></div>
           <div class="img4-container">
          </div>  -->
       </div>
      </div>
   
   </div> 
 
  <div class="order-box">
  <p>Continue </p>
  
  <!-- <img src="../assets/next.png" width="30"  height="30"/> -->

</div>
</template>