import { Route, Routes } from "react-router";
import HomePage from "./Home-page";
import ArticleSaved from "./Article-Saved";
import ArticleDetails from "./Article-Details";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container  overflow-hidden relative">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ArticleSaved" element={<ArticleSaved />}></Route>
        <Route path="/article/:title" element={<ArticleDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
