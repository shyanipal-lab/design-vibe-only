/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FunPage from "./pages/FunPage";
import CaseStudyPage from "./pages/CaseStudyPage";

export default function App() {
  const basename = import.meta.env.MODE === 'production' ? '/design-vibe-only' : '/';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}



