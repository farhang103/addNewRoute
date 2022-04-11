import { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteContext } from "./Context";
import NewRoute from "./NewRoute";

import Home from "./Home";
function App() {
  const [url, setUrl] = useState([]);
  const providerValue = useMemo(() => ({ url, setUrl }), [url, setUrl]);
  return (
    <Router>
      <RouteContext.Provider value={providerValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<NewRoute />} />
        </Routes>
      </RouteContext.Provider>
    </Router>
  );
}

export default App;
