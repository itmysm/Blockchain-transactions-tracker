<template>
  <div>
    <button class="btn">isModalOpen</button>
    <dialog id="writeLetter" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script lang="ts" setup>

const writeLetterProps = defineProps({
  isModalOpen: Boolean
})
</script>