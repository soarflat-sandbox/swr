import { useHits } from '../hooks/useHits';

export function ResultStats({ query }) {
  const { data, isLoading, isError } = useHits(query);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <p>{data.query} の検索結果</p>
      <p>About {data.nbHits} results</p>
    </div>
  );
}
