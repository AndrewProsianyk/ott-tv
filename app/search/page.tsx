import SearchForm from "../components/searchForm/SearchForm";
import GridListSection from "../components/gridListSection/GridListSection";
import { fetchMediaByQuery } from "../utils/fetchMedia";
import PageContentWrap from "../components/pageContentWrap/PageContentWrap";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.query?.trim();

  let results = null;
  if (query && query.length > 0) {
    results = await fetchMediaByQuery("movie", query);
  }

  return (
    <PageContentWrap>
      <SearchForm />

      {!query ? (
        <p className="text-gray-500 text-center mt-8">
          Enter a movie title to search
        </p>
      ) : results === null ? (
        <p className="text-red-500 text-center mt-8">
          Error fetching results. Try again.
        </p>
      ) : results.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">
          No results found for <b>{query}</b>
        </p>
      ) : (
        <GridListSection
          list={results}
          title="Search Results:"
          noDataMsg="No movies found. Try a different search term."
        />
      )}
    </PageContentWrap>
  );
}
