<script lang="ts" setup>
import { Icon } from '@iconify/vue';
const emit = defineEmits(['onSearch'])

const maxSearchKeys = 5;
const searchBox = ref('');
const chips = ref<string[] | []>([]);

function onRemoveChip(index: number | undefined = undefined) {
  if (index) {
    searchBox.value = searchBox.value.split(" ").filter((_, itemInd) => itemInd != index).join(" ");
  } else {
    searchBox.value = ""
    chips.value = []
  }
  
  onGetUserSearch()
}

function onGetUserSearch() {
  chips.value = searchBox.value.split(" ").filter((word) => word !== "");
  emit("onSearch", chips.value)
}

</script>

<template>
  <div class="w-full flex flex-col items-center justify-center mt-5 md:mt-10">
    <label
      class="w-4/5 md:w-1/2 outline-none text-sm md:text-base max-w-[500px] input input-bordered flex items-center gap-2 hover:outline-none focus:outline-none h-12 md:h-16 relative mb-3 cursor-text">
      <input type="text" :maxlength="chips.length > maxSearchKeys ? searchBox.length : searchBox.length + 1"
        class="grow" placeholder="Ex: london, frank, best friends" v-model="searchBox" @input="onGetUserSearch()" />

      <button @click="chips.length && onRemoveChip()">
        <Icon v-if="chips.length" class="text-xl text-black cursor-pointer" icon="mdi:remove" />
        <Icon v-else class="text-xl text-black" icon="mdi:magnify" />

      </button>

      <p class="absolute cursor-default select-none text-xs left-0 -bottom-6 md:-bottom-7 animate__animated animate__faster"
        :class="chips.length > 0 && chips.length <= maxSearchKeys ? 'animate_fadeInDown text-black' : 'text-red-600'">
        {{ (maxSearchKeys >= chips.length && chips.length > 0) ? `Remaining keys: ${5 - chips.length}` : '' }}
        {{ maxSearchKeys < chips.length ? `Only the first 5 keys are effective in the search` : '' }} </p>
    </label>
    <div class="w-full xl:w-2/6 min-h-11 justify-center mt-5 flex flex-wrap gap-y-5 gap-x-3">
      <p v-for="(chip, index) in chips" :key="index" @click="() => onRemoveChip(index)"
        class="group w-fit h-10 flex justify-center text-xs md:text-sm items-center rounded-md shadow-md px-3 cursor-text hover:bg-primary hover:text-white transition-colors"
        :class="index >= maxSearchKeys ? 'opacity-60' : ''">
        <span class="font-semibold select-none">{{ chip }}</span>
        <button
          class="btn btn-link min-w-[fit-content] w-fit h-fit min-h-[fit-content] ml-2 p-0 mt-[1px] bg-transparent border-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] text-red-600 group-hover:text-white w-[16px]"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </p>
    </div>
  </div>
</template>