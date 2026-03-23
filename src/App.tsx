/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FunPage from "./pages/FunPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import PlaygroundLayer from "./components/PlaygroundLayer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PlaygroundLayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}



