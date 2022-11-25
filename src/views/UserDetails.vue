<script setup>
import { toRefs } from 'vue';
const props = defineProps(["userName", "user"]);
const { userName, user } = toRefs(props);

</script>

<template>
  
    <div>
       <p>{{user.name}}</p>
       <p>{{user.id}}</p>
    </div>
    
</template>