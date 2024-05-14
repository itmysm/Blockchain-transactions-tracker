<template>
  <div class="w-full px-5 md:px-10 py-5 fixed top-0">
    <div class="w-full flex justify-between items-center">
      <p class="text-lg font-bold">OurStory</p>
      <div class="flex gap-x-3">
        <button class="btn btn-outline btn-primary text-primary-complement px-7 h-11 font-bold">Submit a letter</button>
      </div>
    </div>

    <hr class="bg-secondary-100 absolute w-full left-0 bottom-0" />
  </div>
</template>

<script setup lang="ts">
import Button from './shared/UI/Button.vue';

defineProps<{
  visible?: boolean;
}>();
</script>