<script lang="ts" setup>
import type TheHeader from '@/components/TheHeader.vue';


</script>

<template>
  <div>
    <TheHeader :visible="false" />
    <slot />
  </div>
</template>