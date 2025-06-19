"use client";

import { searchMovie } from "../actions/searchMovie";
import { useActionState } from "react";
import SearchForm from "../components/searchForm/SearchForm";
import SearchResultsSection from "../components/searchResultsSection/SearchResultsSection";

const initialState = {
  results: null,
  error: null,
};

export default function SearchPage() {
  const [state, formAction] = useActionState(searchMovie, initialState);
  console.log(state);
  return (
    <main className="pt-[200px]">
      <SearchForm action={formAction} />
      {state?.error && <p className="text-red-500">Error: {state.error}</p>}
      <SearchResultsSection results={state.results} />
    </main>
  );
}
