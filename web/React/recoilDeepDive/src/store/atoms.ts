import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 12,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});
