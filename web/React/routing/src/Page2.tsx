import { memo } from "react";

const Page2 = memo(() => {
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