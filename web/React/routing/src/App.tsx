import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Page2 from "./Page2";
import { memo } from "react";

export const TopBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 20,
          backgroundColor: "#E5E5f7",
          paddingLeft: 2,
          margin: 0,
          padding: 0,
          justifyContent: "center",
        }}
      >
        <h4>
          <button
            onClick={() => {
              navigate("/");
            }}
            style={{
              border: "#fff",
              backgroundColor: "transparent",
              cursor: "grab",
            }}
          >
            Page1
          </button>
        </h4>
        <h4>
          <button
            onClick={() => {
              navigate("/Page2");
            }}
            style={{
              border: "#fff",
              backgroundColor: "transparent",
              cursor: "grab",
            }}
          >
            Page2
          </button>
        </h4>
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

export const Page1 = memo(() => {
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
        <h2></h2>
      </div>
    </>
  );
});