# Routing

When we need to route through a website we use /paths

such as 
lets say facebook.com/home, facebook.com/profile and so on 

in React we use react-router-dom to facilitate this 


for eg 

``` jsx
<BrowserRouter>
  <Routes>
    <Route path="/Page1" element={<Page1 />} />
    <Route path="/Page2" element={<Page2 />} />
  </Routes>
</BrowserRouter>
```

And in Pages we have elemets facilitating redirection to that path such as anchor tags

``` jsx
 <a href="/page1">page1</a>
```

## Wrong!!!

But as you can see, it keeps on fetching / hard reload data from server

instead of using anchor tag use useNavigate


``` jsx
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
  ```


# Lazy Loading 

## Good Day
