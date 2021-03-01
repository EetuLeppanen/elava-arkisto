import { Elasticsearch, Results } from "react-elasticsearch";

export default function MyComponent() {
  return (
    <Elasticsearch url={url}>
      <Results
        id="result"
        items={data => data.map(item => <>{item._source.title}</>)}
      />
    </Elasticsearch>
  );
}