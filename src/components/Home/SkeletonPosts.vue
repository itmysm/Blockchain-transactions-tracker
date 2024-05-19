<template>
  <div v-for="item in posts" class="border border-solid p-3 rounded-lg">
    <h2 class="font-semibold tracking-wider">
      <div class="skeleton h-2 w-1/3"></div>
    </h2>
    <hr class="bg-black/30 mt-2">
    <div class="flex flex-col gap-y-2 my-3 pb-5">
      <div class="skeleton h-2 w-full"></div>
      <div class="skeleton h-2 w-full"></div>
      <div class="skeleton h-2 w-full"></div>
    </div>
  </div>
</template>

<script setup>
const posts = [1, 2, 3, 4,5,6,7]
</script>