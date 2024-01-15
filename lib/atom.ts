import { Podcast } from "@prisma/client";
import { atom } from "recoil";

export const currentPodcastState = atom<Podcast | null>({
  key: "currentPodcast",
  default: null,
});
