import React, { Suspense } from "react";
import "./styles.css";
import Rock from "./components/rock";
import CustomBox from "./components/customBox";
export default function App() {
  return (
    <div className="App">
      <Rock />
    </div>
  );
}
