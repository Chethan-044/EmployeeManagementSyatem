import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const { userData } = useContext(AuthContext);

  // Restore login on refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@company.com" && password === "123") {
      const adminUser = { role: "admin" };
      setUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      return;
    }

    // Employee login
    const employee = userData?.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      const empUser = { role: "employee", data: employee };
      setUser(empUser);
      localStorage.setItem("loggedInUser", JSON.stringify(empUser));
    } else {
      alert("Invalid Credentials");
    }
  };

  // Logout helper (optional but recommended)
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user?.role === "admin" && (
        <AdminDashboard logout={handleLogout} />
      )}

      {user?.role === "employee" && (
        <EmployeeDashboard user={user.data} logout={handleLogout} />
      )}
    </>
  );
};

export default App;
