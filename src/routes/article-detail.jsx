import { useParams } from "react-router-dom";

export default function ArticleDetail() {
  const params = useParams();

  return (
    <div>
      <h1>Article id: {params.articleId}</h1>
    </div>
  );
}
