<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

// Define the props
const props = defineProps({
  isOpen: Boolean
});

// Define emits
const emit = defineEmits(['closeModal']);

// Create a ref for the modal element
const modalRef = ref<HTMLDialogElement | null>(null);

// Watch the isOpen prop
watch(() => props.isOpen, (newVal) => {
  if (modalRef.value) {
    if (newVal) {
      modalRef.value.showModal();
    } else {
      modalRef.value.close();
    }
  }
});
</script>

<template>
  <dialog ref="modalRef" id="my_modal_3" class="modal" @close="emit('closeModal')">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('closeModal')">✕</button>
      </form>
      <h3 class="font-bold text-lg">OurStory 💙</h3>
      <p class="py-4">OurStory is personal project! in fact is about someone that i know in my childhood and she was my best friend. it's just a try to I find her. this project </p>
    </div>

    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
