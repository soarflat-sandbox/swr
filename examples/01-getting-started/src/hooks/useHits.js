import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data);

export function useHits(query) {
  const { data, error } = useSWR(`https://hn.algolia.com/api/v1/search?query=${query}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
