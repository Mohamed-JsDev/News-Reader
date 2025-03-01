import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeArticle } from "./RTK/saveSlice";
import NotFound from "./components/NotFound";

function ArticleSaved() {
  const ArticlesSaved = useSelector((state) => state.savedArticles);
  const dispatch = useDispatch();
  return (
    <div className="mt-26 text-center w-screen flex flex-col items-center  ">
      <h2 className=" text-3xl px-4 pb-2 mb-4   border-b-4 border-b-[var(--second-color)]">
        My Saved <span className="text-[var(--second-color)]">Articles</span>
      </h2>
      <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 ">
        {ArticlesSaved.length === 0 ? (
          <NotFound title="Not Article Saved " />
        ) : (
          ArticlesSaved.map((article) => (
            <article
              key={article.title}
              className="bg-white text-black rounded-2xl mb-4 p-4 shadow-lg text-start hover:shadow-3xl"
            >
              <img
                className="rounded-2xl mb-3 h-48 w-full object-cover"
                src={article.urlToImage}
                alt={article.title || "Article Image"}
              />
              <h3 className="text-xl font-bold mb-2">
                {article.title || "No Title Available"}
              </h3>
              <span className="text-gray-500 mb-2">
                Published at:{" "}
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <div className="mt-4 flex justify-between">
                <Link
                  to={`/article/${encodeURIComponent(article.title)}`}
                  className="btn-1    w-3/5  text-center    "
                >
                  Read More
                </Link>
                <button
                  className="btn-2 w-2/5"
                  onClick={() => dispatch(removeArticle(article))}
                >
                  Remove
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
export default ArticleSaved;
// <div className="text-white m-50 bg-black p-50">{Articles.length}</div>;
