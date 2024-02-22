export interface SearchResponse {
  page:          number;
  results:       Movies[];
  total_pages:   number;
  total_results: number;
}

export interface Movies {
  adult:             boolean;
  backdrop_path:     null | string;
  id:                number;
  name:              string;
  original_language: string;
  original_name:     string;
  overview:          string;
  poster_path:       null | string;
}
