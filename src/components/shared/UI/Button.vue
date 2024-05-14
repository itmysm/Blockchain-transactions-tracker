<template>
  <button :class="button.contained">
    {{ buttonProps.content }}
  </button>
</template>

<script lang="ts" setup>
const buttonProps = defineProps({
  path: String,
  content: {
    type: String,
    required: true
  },
  variant: {
    default: 'contained',
    validator: (value: string) => ['contained', 'outlined', 'text'].includes(value)
  },
  color: {
    default: 'primary',
    validator: (value: string) => ["primary", "secondary", "info", "error", "success", "warning", "custom"].includes(value)
  },
  size: {
    default: 'auto',
    validator: (value: string) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  customClass: {
    default: {
      button: '',
      content: ''
    },
    validator: (value: { button?: string, content?: string }) => {
      return typeof value.button === 'string' && typeof value.content === 'string';
    }
  },
  // mode: {
  //   default: 'classic'
  // }
});


const button = {
  'contained': `bg-${buttonProps.color}-500 text-${buttonProps.color}-complement hover:bg-${buttonProps.color}-complement hover:text-${buttonProps.color}-500`,
  'outlined': `border border-${buttonProps.color}-500 text-${buttonProps.color}-500`,
  'text': `text-${buttonProps.color}-500`
};
</script>