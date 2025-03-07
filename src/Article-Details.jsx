import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchArticles } from "./RTK/ArticlesSlice";
import NotFound from "./components/NotFound";
import ImageComponent from "./components/ImageComponent";
import { addArticle } from "./RTK/saveSlice";

function ArticleDetails() {
  const dispatch = useDispatch();
  const { title } = useParams();
  const articles = useSelector((state) => state.Articles);
  const article = articles.find((article) => article.title === title);
  useEffect(() => {
    dispatch(FetchArticles());
  }, [dispatch]);
  if (!article) {
    return <NotFound title="Article not found" />;
  }

  return (
    <article
      key={article.id}
      className="bg-white text-black rounded-2xl shadow-lg p-6 mt-20   "
    >
      <ImageComponent
        className="rounded-2xl  w-4xl h-126 object-cover  mb-4"
        src={article.media_url}
        alt={article.title || "Article Image"}
      />
      <h3 className="text-2xl font-semibold mb-2">
        {article.title || "No Title Available"}
      </h3>
      <h4 className="text-lg font-medium text-gray-700 mb-2">
        {article.creator}
      </h4>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <p className="text-xl font-normal mb-4">{article.content}</p>
      <span className="block text-sm text-gray-500 mb-4">
        Published at: {new Date(article.pub_date).toLocaleDateString()}
      </span>
      <div className="flex justify-between mt-4">
        <button
          className="btn-2  w-1/2 mx-1"
          onClick={() => dispatch(addArticle(article.id))}
        >
          Save
        </button>
        <a
          className="btn-1 w-1/2 text-center"
          href={article.source_link}
          target="_blank"
        >
          <button>Visit</button>
        </a>
      </div>
    </article>
  );
}

export default ArticleDetails;
