<script lang="ts" setup>
import { ref } from 'vue';
import UserPreference from "@/components/App/UserPreference.vue";
import { flagWords } from "@/utils/app/flag"

const searchBox = ref('');
const chips = ref<string[] | []>([]);

function onGetUserSearch() {
  chips.value = searchBox.value.split(" ")
}

function onRemoveChip(index: number) {
  searchBox.value = searchBox.value.split(" ").filter((item, itemInd) => itemInd != index).join(" ")
  onGetUserSearch()
}

function onSubmit() {
  const searchBoxLengthItems = searchBox.value.split(" ")
  for (let index = 0; index < searchBoxLengthItems.length; index++) {
    console.log(flagWords(searchBoxLengthItems[index]));
  }

  console.log('submit');
}
</script>
<template>
  <div class="animate__animated animate__fadeInUp px-5">
    <div class="flex justify-center">
    </div>

    <div class="w-full flex flex-col items-center">
      <h1 class="text-[40px] md:text-[54px] lg:text-[64px] tracking-wide font-black mt-10">
        Write Your Letter</h1>
      <p class="text-center text-base md:text-xl tracking-wide mt-3 md:mt-8">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nostrum molestias asperiores <br class="hidden md:block" /> alias
        qui illum voluptates
      </p>
    </div>

    <div class="w-full flex flex-col items-center justify-center mt-5 md:mt-10">
      <label
        class="w-1/2 outline-none max-w-[500px] input input-bordered flex items-center gap-2 hover:outline-none focus:outline-none h-16">
        <input type="text" class="grow" placeholder="Search" v-model="searchBox" @input="onGetUserSearch()" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 opacity-70">
          <path fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
      </label>

      <div v-if="searchBox.length" class="w-full justify-center mt-5 flex gap-x-3">
        <p v-for="(chip, index) in chips" :key="index" @click="() => onRemoveChip(index)"
          class="group w-fit h-10 flex justify-center text-sm items-center rounded-md shadow-md px-3 cursor-pointer hover:bg-primary hover:text-white transition-colors">
          <span class="font-semibold">{{ chip }}</span>

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

    <client-only>
      <div></div>
      <!-- <UserPreference /> -->
    </client-only>
  </div>
</template>