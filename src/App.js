import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PaginationApp from "./components/PaginationApp/PaginationApp";
import TextGenApp from "./components/TextGeneratorApp/TextGenApp";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pagination" element={<PaginationApp />} />
        <Route path="/textGenerator" element={<TextGenApp />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;