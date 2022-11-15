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

<template>
  <!-- <p>{{ response.id }}</p>
  <p>{{response.name}}</p> -->
  <!-- <img :src="response.avatar" /> -->
<table border="1px">
    <tr>
    <td>Name</td>
    <td>Avatar</td>
  </tr>
  <tr v-for="item in response" v-bind:key="item.id" >
    <td>{{item.name}}</td>
    <td> <img :src="item.avatar" /></td>
  </tr>
</table>
</template>