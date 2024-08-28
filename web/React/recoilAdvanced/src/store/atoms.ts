import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: {
    network: 102,
    jobs: 6,
    messaging: 3,
    notifications: 3,
  },
});
