import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count1 = ref(0);
  const count2 = ref(0);
  const count3 = ref(0);
  const count4 = ref(0);
  
  function incrementVase1() {
    count1.value++;
  }
  function incrementVase2() {
    count2.value++;
  }
  function incrementVase3() {
    count3.value++;
  }
  function incrementVase4() {
    count4.value++;
  }
  // function decrement() {
  //   count.value--;
  // }

  return { count1, count2 ,count3,count4,incrementVase1,incrementVase2,incrementVase3,incrementVase4};
});
