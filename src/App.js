import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          {/* Private Route Begins */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          {/* Private Route Ends */}
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
