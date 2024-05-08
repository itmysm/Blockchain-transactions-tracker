import { defineStore } from "pinia";
import { createHttpClient } from "@/shared/http";
import type { Story } from "./model";
import type { Response } from "@/shared/http/model";

const http = createHttpClient({
  PrefixUrl: "http://localhost:3001/api/", //process.env.BASE_URL,
});

interface StoriesAction {
  getStories: (keywords: [], pageNumber: number, limit: number) => Promise<Response<Story>>;
}

export const useStoriesStore = defineStore("stories", {
  actions: {
    getStories: (keywords, pageNumber, limit) => {
      console.log(process.env.BASE_URL);
      http.get(`stories/search?keywords=${keywords}&page=${pageNumber}&limit=${limit}`);
    },
  } as StoriesAction,
});
