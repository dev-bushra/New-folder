import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const EntriesEmployees = React.lazy(() => import("pages/EntriesEmployees"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/entriesemployees" element={<EntriesEmployees />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
