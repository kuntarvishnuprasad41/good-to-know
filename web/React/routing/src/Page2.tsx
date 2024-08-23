import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = memo(() => {
  const navigate = useNavigate();
  return (
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
      <h1 className="page1">Page2</h1>
      <h2></h2>
    </div>
  );
});

export default Page2;
