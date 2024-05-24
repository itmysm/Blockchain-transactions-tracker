import { defineStore } from 'pinia';
import { createHttpClient } from '@/shared/http';
import type { Story } from './model';
import type { Response } from '@/shared/http/model';

const http = createHttpClient({
  PrefixUrl: 'http://localhost:3001/api/', //process.env.BASE_URL,
});

interface StoriesAction {
  getStories: (
    keywords: [] | string[],
    pageNumber: number,
    limit: number
  ) => Promise<Response<Story[] | []>>;
}

export const useStoriesStore = defineStore('stories', {
  state: () => {
    return {
      posts: [],
    };
  },
  actions: {
    getStories: (keywords, pageNumber, limit) => {
      return http.get(
        `stories/search?keywords=${keywords}&page=${pageNumber}&limit=${limit}`
      );
    },
  } as StoriesAction,
});
