<template>
  <div>
    <p>
      Hello world
      <button @click="submit">submit</button>
    </p>
  </div>
</template>
<script setup>
const { $NuxtsanctumAuth } = useNuxtApp()
function submit(){
  console.log("submitted")
  // console.log(Hadiauth)
}
</script>
