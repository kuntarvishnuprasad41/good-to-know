## Recoil fetch data or async queries 

we can use selectors inside  atoms to get this done

``` js
export const fetchCountOfAll = atom({
  key: "fetchCountOfAll",
  default: selector({
    key: "fetchCountOfAllSel",
    get: async () => {
      await new Promise((r) => setTimeout(r, 5000)); //artificial delay for adding loader
      const res = await fetch("http://localhost:8000/notifications");
      const data = await res.json();
      return data;
    },
  }),
});

```