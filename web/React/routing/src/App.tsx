import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Page1 = React.lazy(() => import("./Page1"));
const Page2 = React.lazy(() => import("./Page2"));
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
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

const Loading = () => {
  return <>Loading...</>;
};
