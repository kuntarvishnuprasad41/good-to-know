import { selector } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from "./atoms";

export const myNetWorkSelector = selector({
  key: "networkSelector",
  get: ({ get }) => {
    const network = get(networkAtom);
    return network > 99 ? "99+" : network;
  },
});

export const countOfAllSelector = selector({
  key: "countOfAllSelector",
  get: ({ get }) => {
    const network = get(networkAtom);
    const jobs = get(jobsAtom);
    const messaging = get(messagesAtom);
    const notification = get(notificationAtom);

    return network + jobs + messaging + notification;
  },
});
