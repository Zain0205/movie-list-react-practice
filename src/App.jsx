import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvSeriesPage from "./pages/TvSeriesPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/tv' element={<TvSeriesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
