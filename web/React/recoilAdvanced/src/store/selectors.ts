import { atom, selector } from "recoil";
import { networkAtom } from "./atoms";

export const myNetWorkSelector = selector({
  key: "networkSelector",
  get: ({ get }) => {
    const network = get(fetchCountOfAll);
    return network.network > 99 ? "99+" : network.network;
  },
});

export const countOfAllSelector = selector({
  key: "countOfAllSelector",
  get: ({ get }) => {
    const networks = get(fetchCountOfAll);

    return (
      networks.network +
      networks.jobs +
      networks.messaging +
      networks.notifications
    );
  },
});

//async data queries
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
