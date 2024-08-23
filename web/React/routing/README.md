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

## Good Day
