import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1 className="text-center">
      HatchHead
      <br />
      Technical Interview
    </h1>
    <div className="text-center">
      <p className="text-center">
        Read the questions in <code>src/questions</code> and
        <br />
        edit those files to solve the problem
      </p>

      <p>
        Exit <code>src/main</code> to see your results
      </p>
    </div>
    <div className="card">
      <App />
    </div>

    <p className="read-the-docs text-center">
      <a href="https://hatchhead.co">https://hatchhead.co</a>
    </p>
  </React.StrictMode>
);
