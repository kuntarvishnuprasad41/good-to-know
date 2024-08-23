const Page2 = () => {
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
      <h2>
        <a href="/page1">page1</a>
      </h2>
    </div>
  );
};

export default Page2;
