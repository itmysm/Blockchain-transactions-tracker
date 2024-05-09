<script lang="ts" setup>
import UserPreference from "@/components/App/UserPreference.vue";
</script>

<template>
  <div>
    <client-only>
      <div>home page</div>
      <UserPreference />
    </client-only>
  </div>
</template>