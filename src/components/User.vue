<script setup>
	import { ref } from 'vue'
  import { useRouter } from 'vue-router';
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
console.log(response.value);

const user = ref({});
const router = useRouter();
function userSelected(userObj) {
  user.value = userObj;
  router.push({
    name: "UserDetails",
    params: { user: userObj.name },
  });

}


</script>

<template>

<table class="customers">
  <h1>Our Customers</h1> <br/>
    <tr>
    <th>Name</th>
    <th>Avatar</th>
  </tr>
  <tr v-for="(item,index) in response" :key="index" >
    <td>{{item.name}}</td>
    <td> <img :src="item.avatar" @click="userSelected(item)"/></td>
  </tr>
</table>
<router-view :user="user"></router-view>
</template>

