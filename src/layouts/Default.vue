<script lang="ts" setup>
import type TheHeader from '@/components/TheHeader.vue';


</script>

<template>
  <div class="flex max-h-screen overflow-hidden">
    <div class="w-full relative h-['inherit'] overflow-y-auto">
      <TheHeader :visible="false" />
      <div class="mt-[68px]">
        <slot />
      </div>
      <!-- <TheFooter /> -->
    </div>
    <TheSidebar class="flex" />
  </div>
</template>