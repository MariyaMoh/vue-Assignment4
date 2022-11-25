<script setup>

</script>
<template>
<header >
 <p class="logo"><router-link class="nav-link" to="/">VAZA</router-link></p>

 
  <nav class="nav">
 
     <!-- <router-link class="nav-link" to="/">Home</router-link> -->
    <router-link class="nav-link" to="/about">About</router-link> 
    <!-- <router-link class="nav-link" to="/contact">Conract us</router-link>  -->
     <!-- <router-link class="nav-link" to="/order">Order</router-link>  -->
     <router-link class="nav-link" to="/user">API</router-link> 
     
   
  </nav>
    
  </header>
  

  <main>
    <router-view />
  </main>
<footer>
  <p> Twitter&nbsp;&nbsp;Instagram&nbsp;&nbsp;YouTube&nbsp;&nbsp;VAZA 2022</p> </footer>
</template>

