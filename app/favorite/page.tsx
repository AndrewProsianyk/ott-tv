"use client";

import Container from "../components/container/Container";
import GridListSection from "../components/gridListSection/GridListSection";
import PageContentWrap from "../components/pageContentWrap/PageContentWrap";
import { useFavoriteStore } from "../store/favoritesStore";

export default function SearchPage() {
  const favorites = useFavoriteStore((state) => state.favorites);
  if (!favorites) return <h1 className="text-white">NO ITEMS </h1>;
  return (
    <PageContentWrap>
      <Container>
        <GridListSection
          list={favorites}
          title="Your list of favorite:"
          noDataMsg="Add some movies or tv series to favorites and you will see it here."
        />
      </Container>
    </PageContentWrap>
  );
}
