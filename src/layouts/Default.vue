<script lang="ts" setup>
import type TheHeader from '@/components/TheHeader.vue';


</script>

<template>
  <div>
    <TheHeader :visible="false" />
    <div class="mt-[68px]">
      <slot />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>