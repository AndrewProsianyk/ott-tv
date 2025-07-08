import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Media } from "../utils/types";

type FavoriteStore = {
  favorites: Media[];
  toggleFavorite: (media: Media) => void;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (media) => {
        const exists = get().favorites.find((m) => m.id === media.id);
        if (exists) {
          set({
            favorites: get().favorites.filter((m) => m.id !== media.id),
          });
        } else {
          set({
            favorites: [...get().favorites, media],
          });
        }
      },
    }),
    {
      name: "favorites",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
