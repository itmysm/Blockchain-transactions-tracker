<script lang="ts" setup>
import { defineProps } from 'vue';
import type { Story } from '@/store/stories/model';
import { shortText } from '@/utils/app/short';
import SkeletonPosts from './SkeletonPosts.vue';

const route = useRoute()
const router = useRouter()
const props = defineProps<{
  loading: boolean;
  posts: Story[] | [];
}>();

const selectedPost = ref<null | string>(null)

function onSelectPost(Id: string) {
  if (selectedPost.value != Id) {
    selectedPost.value = Id
    router.replace({ query: { Id: Id } })
  }
}

// watch(() => route.query, () => {
//   if (!route.query?.Id) {
//     selectedPost.value = null
//   }
// });

// onMounted(() => {
// });
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      :class="`w-full max-w-[1500px] grid ${props.loading || props.posts.length ? 'xs:grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`">
      <div v-if="!props.loading && props.posts.length" v-for="post in props.posts" :key="post.Id"
        @click="() => onSelectPost(post.Id)"
        :class="`border cursor-pointer transition-colors border-solid p-3 rounded-lg ${post.Id === selectedPost ? 'border-black/25' : 'border-black/10'}`">
        <h2 class="font-semibold tracking-wider select-none"> {{ post.Name }}
        </h2>
        <hr class="bg-black/30 mt-2">
        <p class="text-xs select-none md:text-[14px] tracking-wide my-3 text-black/80 leading-tight">
          {{ shortText(post.Text, 200) }}
        </p>
      </div>
      <SkeletonPosts v-else-if="props.loading" />
      <div v-else-if="!props.loading && !props.posts.length" class="w-full flex justify-center items-center">
        <p>no posts</p>
      </div>
    </div>
  </div>
</template>
