import { Episode, Podcast } from "@prisma/client";
import { atom, selector, selectorFamily } from "recoil";

export const currentPodcastState = atom<
  | {
      podcast: null;
      state: "null";
    }
  | {
      podcast: null | Podcast;
      state: "loading";
    }
  | {
      podcast: Podcast;
      state: "loaded";
    }
>({
  key: "currentPodcastState",
  default: {
    podcast: null,
    state: "null",
  },
});

export const currentEpisodesQuery = selector<Episode[]>({
  key: "currentEpisodesQuery",
  get: async ({ get }) => {
    const { podcast, state } = get(currentPodcastState);
    if (state === "null" || state === "loading") return [];

    const res = await fetch(`/api/podcasts/${podcast.id}/episodes`);
    const episodes = await res.json();
    return episodes;
  },
});
