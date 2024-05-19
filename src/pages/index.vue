<script lang="ts" setup>
import { ref } from 'vue';
import UserPreference from "@/components/App/UserPreference.vue";
import { flagWords } from "@/utils/app/flag"
import SkeletonPosts from '@/components/Home/SkeletonPosts.vue';
import debounce from 'debounce';

const posts = ref([]);
const loading = ref({
  fetchPosts: false
});

const searchBox = ref('');
const chips = ref<string[] | []>([]);
const maxSearchKeys = 5;

const debouncedSubmit = debounce(onSubmit, 1500);

// fetch posts in first load
onMounted(() => {
  loading.value.fetchPosts = true  
  debouncedSubmit()
})

function onGetUserSearch() {
  debouncedSubmit.flush()
  chips.value = searchBox.value.split(" ").filter((word, index) => word !== "");

  loading.value.fetchPosts = true;
  debouncedSubmit();
}

function onRemoveChip(index: number) {
  searchBox.value = searchBox.value.split(" ").filter((item, itemInd) => itemInd != index).join(" ");
  onGetUserSearch();
}

function onSubmit() {
  const searchBoxLengthItems = searchBox.value.split(" ");
  for (let index = 0; index < searchBoxLengthItems.length; index++) {
    // flags should set in client browser and sends to server and results should be limited for these users
    console.log(flagWords(searchBoxLengthItems[index]));
  }

  loading.value.fetchPosts = false;
  console.log('submit');
}
</script>

<template>
  <div class="animate__animated animate_fadeInUp px-5">
    <div class="flex justify-center"></div>
    <div class="w-full flex flex-col items-center">
      <h1 class="text-[40px] md:text-[54px] lg:text-[64px] tracking-wide font-black mt-10">
        Write Your Letter
      </h1>
      <p class="text-center text-base md:text-xl tracking-wide mt-3 md:mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias asperiores
        <br class="hidden md:block" /> alias qui illum voluptates
      </p>
    </div>
    <div class="w-full flex flex-col items-center justify-center mt-5 md:mt-10">
      <label
        class="w-4/5 md:w-1/2 outline-none text-sm md:text-base max-w-[500px] input input-bordered flex items-center gap-2 hover:outline-none focus:outline-none h-12 md:h-16 relative mb-3 cursor-pointer">
        <input type="text" :maxlength="chips.length > maxSearchKeys ? searchBox.length : searchBox.length + 1"
          class="grow" placeholder="Ex: london, frank, best friends" v-model="searchBox" @input="onGetUserSearch()" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 opacity-70">
          <path fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
        <p class="absolute cursor-default select-none text-xs left-0 -bottom-6 md:-bottom-7 animate__animated animate__faster"
          :class="chips.length > 0 && chips.length <= maxSearchKeys ? 'animate_fadeInDown text-black' : 'text-red-600'">
          {{ (maxSearchKeys >= chips.length && chips.length > 0) ? `Remaining keys: ${5 - chips.length}` : '' }}
          {{ maxSearchKeys < chips.length ? `Only the first 5 keys are effective in the search` : '' }} </p>
      </label>
      <div class="w-full xl:w-2/6 min-h-11 justify-center mt-5 flex flex-wrap gap-y-5 gap-x-3">
        <p v-for="(chip, index) in chips" :key="index" @click="() => onRemoveChip(index)"
          class="group w-fit h-10 flex justify-center text-xs md:text-sm items-center rounded-md shadow-md px-3 cursor-pointer hover:bg-primary hover:text-white transition-colors"
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
    <hr class="w-full bg-black/50 my-12" />
    <div class="w-full flex justify-center">
      <div
        :class="`w-full max-w-[1500px] grid ${loading.fetchPosts || posts.length ? 'xs:grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`">
        <div v-if="!loading.fetchPosts && posts.length" v-for="item in [1, 2, 3, 4]"
          class="border border-solid p-3 rounded-lg">
          <h2 class="font-semibold tracking-wider">testq</h2>
          <hr class="bg-black/30 mt-2">
          <p class="text-xs md:text-[14px] tracking-wide my-3 text-black/80 leading-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ad rerum voluptatem amet vel
            iure fugit quisquam iste, sint sapiente at quae. Accusantium quas voluptate aut ipsum, voluptatum similique
            quasi.
          </p>
        </div>
        <SkeletonPosts v-else-if="loading.fetchPosts" />
        <div v-else-if="!loading.fetchPosts && !posts.length" class="w-full flex justify-center items-center">
          <p>no posts</p>
        </div>
      </div>
    </div>
    <client-only>
      <div></div>
      <!-- <UserPreference /> -->
    </client-only>
  </div>
</template>
