import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "./RTK/saveSlice.js";
import { FetchArticles } from "./RTK/ArticlesSlice.js";
import NotFound from "./components/NotFound.jsx";
import Article from "./components/Article.jsx";
import Aside from "./components/Aside.jsx";

function HomePage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.Articles);

  useEffect(() => {
    dispatch(FetchArticles());
  }, [dispatch]);

  return (
    <div className="flex w-screen max-sm:-mt-20 sm:mt-15 lg:mt-20 order-1   ">
      <main className=" grid gap-4 sm:grid-cols-1 sm:items-center sm:justify-center   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-4/5 lg:w-2/3 xl:w-3/4 p-6">
        {articles.length > 0 ? (
          <>
            <Article
              key={articles[0].id}
              article={articles[0]}
              onSave={() => dispatch(addArticle(articles[0]))}
              index={articles.id}
              isFeatured={true}
            />
            {articles.slice(1).map((article) => (
              <Article
                key={article.id}
                article={article}
                onSave={() => dispatch(addArticle(article))}
              />
            ))}
          </>
        ) : (
          <NotFound title="internet is week , Article uploading " />
        )}
      </main>
      <Aside />
    </div>
  );
}

export default HomePage;
