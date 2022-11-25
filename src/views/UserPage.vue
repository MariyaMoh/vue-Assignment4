<script setup>

import User from '../components/User.vue'

// 	import { ref } from 'vue'
// 	const response = ref({})

 
//   await new Promise(resolve => {
//     setTimeout(() => { 
//       resolve()
//     }, 1000)
//   })
    
//   try {
//     const res = await fetch('https://6373f0630bb6b698b618e17b.mockapi.io/api/ma/users')
//     console.log(res)
//     response.value = (await res.json())
//   } catch (error) {
//     response.value = { answer: 'Error! Could not reach the API. ' + error, avatar: [''] }
//   }
// console.log(response.value);


</script> 

<template>
  <Suspense>
    <User />
    <template #fallback>
      <img src="https://media.tenor.com/o8m3bKTsifUAAAAC/hold-on.gif" />
    </template>
  </Suspense>
 <!-- <h1>Users</h1> <br/>
<table id="customers">
    <tr>
    <th>Name</th>
    <th>Avatar</th>
  </tr>
  <tr v-for="(item,index) in response" :key="index" >
    <td>{{item.name}}</td>
    <td> <img :src="item.avatar" /></td>
  </tr>
</table> -->
</template>
<style>

/* h1{
  font-size: 2rem;
  text-align: center;
}
#customers {
  

  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
}

#customers td, #customers th {

  border: 1px solid #ddd;
  padding: 5rem;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {

 padding: 2rem;
  text-align: left;
  background-color: #171b9f;
  color: white;
} */
</style>