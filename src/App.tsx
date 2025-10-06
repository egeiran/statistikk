import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChapterPage from "./pages/ChapterPage";
import "katex/dist/katex.min.css";

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar med fast bredde */}
        <Sidebar />

        {/* Hovedinnhold som fyller alt etter sidebaren */}
        <main className="flex-1 px-10 py-8 pr-16 overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-zinc-300 text-lg">
                  <h1 className="text-3xl font-bold mb-4">Velkommen til TMA4245 🧮</h1>
                  <p>Utforsk kapitlene i sidebaren for å lære statistikk med formler, begreper og quizzer.</p>
                </div>
              }
            />
            <Route path="/chapter/:id" element={<ChapterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
