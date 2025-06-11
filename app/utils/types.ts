export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  adult: boolean;
  production_companies: ProductionCompany[];
  release_date: string;
  vote_average: number;
  video: boolean;
  genres: Genre[];
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type Person = {
  id: number;
  name: string;
  character: string;
  job: string;
  profile_path: string;
};

export type MovieCredits = {
  cast: Person[];
  crew: Person[];
};

export type Video = {
  id: string;
  key: string;
  name: string;
  official: boolean;
  site: string;
  size: number;
  type: string;
};

export type Videos = {
  id: number;
  results: Video[];
};

export type Genre = {
  id: number;
  key?: string;
  name: string;
};
