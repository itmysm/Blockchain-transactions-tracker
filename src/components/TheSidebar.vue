<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const props = defineProps({
	isOpen: Boolean
});

const readMode = ref(false);
const isMobileScreen = ref(false);
const modalPostRef = ref<HTMLDialogElement | null>(null);

function onCloseReadMore() {
	readMode.value = false;
	modalPostRef.value?.close();
	router.replace({ query: {} });
}

function onReadPost() {
	readMode.value = true;

	if (isMobileScreen.value) {
		modalPostRef.value?.showModal();
	} else {
		modalPostRef.value?.close();
	}
}

function onChangePostPreview() {
	isMobileScreen.value = window.innerWidth < 1024;
	if (readMode.value) onReadPost();
}

watch(() => route.query, () => {
	if (route.query?.Id) {
		onReadPost();
	} else {
		onCloseReadMore();
	}
});

onMounted(() => {
	if (route.query?.Id) {
		onReadPost();
	} else {
		onCloseReadMore();
	}

	window.addEventListener("resize", onChangePostPreview);

	// Initial check
	onChangePostPreview();
});

onBeforeUnmount(() => {
	window.removeEventListener("resize", onChangePostPreview);
});
</script>

<template>
	<!-- Desktop sidebar -->
	<div
		:class="`${!isMobileScreen && readMode ? 'w-[400px] p-6' : 'w-[0px] animate_fade_text'} flex flex-col border-l border-solid h-screen transition-all duration-700`"
		@click="onCloseReadMore">
		<div>123</div>
		<div :class="`${!isMobileScreen && readMode ? 'animate_fadeIn_text' : 'animate_fade_text'}`">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vero ipsa iusto molestiae minima ducimus quos
			voluptates repellendus adipisci nam necessitatibus quia, suscipit assumenda ratione laudantium quaerat officiis
			deleniti at.
		</div>
	</div>

	<!-- Mobile modal -->
	<dialog ref="modalPostRef" id="my_modal_3" class="modal modal-bottom">
		<div class="modal-box">
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none focus:outline-none"
					@click="onCloseReadMore">✕</button>
			</form>
			<h3 class="font-bold text-lg">OurStory 💙</h3>
			<p class="py-4">
				OurStory is a personal project! It’s about someone I knew in my childhood, my best friend. This project is an
				attempt to find her.
			</p>
		</div>

		<form method="dialog" class="modal-backdrop">
			<button>Close</button>
		</form>
	</dialog>
</template>