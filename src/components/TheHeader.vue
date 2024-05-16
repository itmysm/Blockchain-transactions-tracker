<template>
  <div class="w-full px-5 md:px-10 py-3 md:py-4 fixed top-0">
    <div class="w-full flex justify-between items-center">
      <a href="/" class="text-xl md:text-2xl lg:text-3xl font-black select-none">OurStory</a>
      <div class="flex gap-x-3">
        <button
          class="btn md:btn-outline btn-md rounded-md btn-primary text-primary-complement px-6 min-h-1 h-11 font-semibold hover:bg-transparent hover:text-black md:hover:!text-white">
          Write Letter
        </button>
        <button
          class="btn btn-md hover:bg-white rounded-md btn-primary text-primary-complement px-6 min-h-1 h-11 hover:!text-primary-500 hidden md:flex">About</button>
      </div>
    </div>

    <hr class="bg-secondary-100 absolute w-full left-0 bottom-0" />
  </div>
</template>

<script setup lang="ts">
</script>