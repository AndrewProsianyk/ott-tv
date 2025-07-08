"use client";

import Container from "../components/container/Container";
import GridListSection from "../components/gridListSection/GridListSection";
import { useFavoriteStore } from "../store/favoritesStore";

export default function SearchPage() {
  const favorites = useFavoriteStore((state) => state.favorites);
  if (!favorites) return <h1 className="text-white">NO ITEMS </h1>;
  return (
    <main className="text-white pt-[200px]">
      <Container>
        <GridListSection results={favorites} title="Your list:" />
      </Container>
    </main>
  );
}
