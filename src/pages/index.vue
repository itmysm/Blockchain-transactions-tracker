<script lang="ts" setup>
import { ref } from 'vue';
import UserPreference from "@/components/App/UserPreference.vue";
import { flagWords } from "@/utils/app/flag"
import debounce from 'debounce';
import { useStoriesStore } from "@/store/stories/index"
import { type Story } from '@/store/stories/model';

const { getStories } = useStoriesStore()

const posts = ref<Story[] | []>([]);
const loading = ref({
  fetchPosts: true
});
let searchedItems: [] | string[] = [];

const debouncedSubmit = debounce(onSubmit, 1500);

function onNewSearch(value: string[]) {
  loading.value.fetchPosts = true
  
  searchedItems = value
  debouncedSubmit()
}


function onSubmit() {
  for (let index = 0; index < searchedItems.length; index++) {
    // flags should set in client browser and sends to server and results should be limited for these users
    console.log(flagWords(searchedItems[index]));
  }

  try {
    getStories(searchedItems, 1, 50).then((response) => {
      posts.value = response.data as Story[];
    }).finally(() => loading.value.fetchPosts = false)
  } catch {
    console.log('error');
  }
}

onMounted(() => {
  loading.value.fetchPosts = true
  debouncedSubmit()
})

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

    <HomeSearch @on-search="($event) => onNewSearch($event)" />
    <hr class="w-full bg-black/50 my-12" />
    <HomePosts :posts="posts" :loading="loading.fetchPosts" />

    <client-only>
      <div></div>
      <!-- <UserPreference /> -->
    </client-only>
  </div>
</template>
