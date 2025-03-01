import { Link, useNavigate } from "react-router";

/* eslint-disable react/prop-types */
function Article({ article, onSave, isFeatured }) {
  const navigate = useNavigate();

  const goToArticle = () => {
    navigate(`/article/${encodeURIComponent(article.title)}`);
  };
  return (
    <article
      className={`bg-white text-black rounded-2xl mb-4  lg:mt-0 p-4 shadow-lg  hover:shadow-3xl  ${
        isFeatured
          ? "xl:col-span-4 lg:col-span-3 md:col-span-2 sm:col-span-1 max-sm:mt-40 "
          : ""
      }`}
    >
      <img
        className="rounded-2xl w-full"
        src={article.urlToImage}
        alt={article.title || "Article Image"}
      />
      <h3 className="text-xl xl:text-lg font-bold mb-4">
        {article.title || "No Title Available"}
      </h3>
      <span className="text-gray-500">
        Published at: {new Date(article.publishedAt).toLocaleDateString()}
      </span>
      <div className="mt-8 sm:flex-col">
        <button className="btn-1 w-3/5" onClick={goToArticle}>
          <Link>Read More</Link>
        </button>
        <button className="btn-2 w-1/4" onClick={() => onSave(article.title)}>
          Save
        </button>
      </div>
    </article>
  );
}
export default Article;
