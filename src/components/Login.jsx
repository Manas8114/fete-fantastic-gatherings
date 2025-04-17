import React, { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === "123" && password === "123") {
      setMessage("✅ Login successful!");
      setTimeout(() => setIsLoggedIn(true), 1000); // transition after message
    } else {
      setMessage("❌ Invalid ID or password.");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="p-5 border rounded shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">🔐 Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="userId" className="form-label">User ID</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              placeholder="Enter ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        {message && (
          <div className={`mt-4 alert ${message.includes("successful") ? "alert-success" : "alert-danger"}`} role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
