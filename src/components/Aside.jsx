import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../RTK/saveSlice.js";
import Article from "./Article";
import { FetchArticles } from "../RTK/ArticlesSlice";
function Aside() {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.Articles);
  const reversedarticles = articles.slice().reverse();
  // Fetch Articles Function
  useEffect(() => {
    dispatch(FetchArticles());
  }, [dispatch]);
  // SideBar Scroll Function
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 1;
        if (
          scrollRef.current.scrollTop >=
          scrollRef.current.scrollHeight - scrollRef.current.clientHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 50);
    return () => clearInterval(scrollInterval); // تنظيف المؤقت عند إلغاء المكون
  }, []);
  return (
    <aside
      ref={scrollRef}
      className="max-sm:hidden sm:hidden md:hidden    lg:flex  flex-col fixed right-0 top-32   w-80   h-120 overflow-y-scroll  ms-2  bg-[var(--primary-color)] text-white p-5  rounded-xl mt-2 "
    >
      {reversedarticles.map((article, index) => (
        <Article
          key={index}
          article={article}
          onSave={() => dispatch(addArticle(article))}
        />
      ))}
    </aside>
  );
}
export default Aside;
