/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router";
import NotFound from "./NotFound";
import Article from "./Article";
import { useDispatch } from "react-redux";
import { addArticle } from "../RTK/saveSlice";

function Header() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const handelSearching = async (p) => {
    p.preventDefault();
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${word}&apiKey=219b2028a41f4abcbf966d17964490d4`
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      const articles = data.articles;
      setResults(articles);

      setShowResults(articles.length > 0);
      console.log(setResults);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearchReset = () => {
    setWord("");
    setShowResults(false);
  };
  return (
    <>
      <header className="sm:px-2 pb-4  max-sm:h-26 lg:block  w-screen fixed top-0 z-10  flex flex-col bg-[var(--primary-color)] text-white ">
        <div className=" sm:text-center flex md:justify-center flex-row items-center p-2 ">
          <h1
            className=" p-2 me-2 mt-4 sm:text-xl lg:text-4xl cursor-pointer shadow-amber-50 shadow-md "
            onClick={handleSearchReset}
          >
            {" "}
            <Link to="/">NEWS </Link>
          </h1>
          <form className="pt-6 max-sm:mx-1 md:mx-20">
            <input
              className="border rounded  p-2 max-sm:w-26 max-sm:mx-1 max-sm:h-6 sm:w-64 sm:text-lg md:text-xl md:max-w-md md:h-10    lg:w-lg   border-solid border-[#50d71e]  bg-white placeholder:text-black outline-none text-black "
              type="text"
              value={word}
              placeholder="search"
              onChange={(e) => setWord(e.target.value)}
            />
            <button
              type="button"
              className="max-sm:p-1 max-sm:text-sm  sm:text-md  sm:ms-2 sm:p-2  md:h-12 lg:text-xl  bg-white text-[var(--primary-color)] cursor-pointer pointer border  border-white border-solid rounded   hover:bg-[#333]  hover:text-white   transition duration-500 ease-in-out"
              onClick={handelSearching}
            >
              Search
            </button>
          </form>
          <p className="max-sm:text-md max-sm:ms-2 p-2 py-2  text-xl mt-6 rounded transition duration-500 ease-in-out hover:bg-[#333]    ">
            <Link to="/ArticleSaved">
              Saved
              <span className=" save "></span>
            </Link>
          </p>
        </div>
      </header>
      {showResults && results.length > 0 ? (
        <div className=" p-10 absolute  top-26 bottom-20 z-10 left-0 right-0    max-sm:w-screen   bg-black   text-white ">
          <div className="sm:ms-20 lg:ms-80 w-1/2    z-10">
            <h2 className="flex justify-between items-center max-sm:w-60 w-auto h-12 px-6 bg-white text-2xl text-black rounded-lg shadow-md">
              <span className="flex-grow text-center font-bold">{word}</span>
              <button
                className="ms-4 h-10 pb-2 px-4 text-3xl font-stretch-150% bg-red-600 rounded text-white hover:bg-red-700 transition duration-300"
                onClick={handleSearchReset}
              >
                x
              </button>
            </h2>
          </div>
          <div className=" w-screen    text-white p-8  absolute  top-20 bottom-20 z-5 left-0 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {results.map((result, index) => (
              <Article
                key={index}
                article={result}
                onSave={() => dispatch(addArticle(result))}
                isFeatured={false}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>لا توجد نتائج.</div>
      )}
    </>
  );
}
export default Header;
