<script setup>
	import { ref } from 'vue'
	const response = ref({})

  // adding delay
  await new Promise(resolve => {
    setTimeout(() => { 
      resolve()
    }, 1000)
  })
    
  try {
    const res = await fetch('https://6373f0630bb6b698b618e17b.mockapi.io/api/ma/users')
    console.log(res)
    response.value = (await res.json())
  } catch (error) {
    response.value = { answer: 'Error! Could not reach the API. ' + error, avatar: [''] }
  }

</script>

<template id="ts">
 <h1>Users</h1> <br/>
<table id="customers">
    <tr>
    <th>Name</th>
    <th>Avatar</th>
  </tr>
  <tr v-for="item in response" v-bind:key="item.id" >
    <td>{{item.name}}</td>
    <td> <img :src="item.avatar" /></td>
  </tr>
</table>
</template>
<style>

h1{
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
}
</style>