import { atom } from "recoil";

export const textReposState = atom<string>({
  key: "textReposState",
  default: ""
});
