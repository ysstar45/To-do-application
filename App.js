// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import TaskDashboard from "./components/TaskDashboard";
// // import ProgressWidget from "./components/ProgressWidget";
// import UserProfile from "./components/UserProfile";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       {isLoggedIn ? (
//         <Dashboard setIsLoggedIn={setIsLoggedIn} />
//       ) : (
//         <Routes>
//           <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       )}
//     </Router>
//   );
// }

// export default App;




import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div
      style={{
        backgroundColor: " rgba(135, 135, 136, 0.1)",
        minHeight: "100%", // Ensures full-screen height
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY:"hidden"
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
