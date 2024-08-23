import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from "./Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export function Page1() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "90dvh",
          flexDirection: "column",
          width: "100vw",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="page1">Page1</h1>
        <h2>
          <a href="/page2">page2</a>
        </h2>
      </div>
    </>
  );
}
