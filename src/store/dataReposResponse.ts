import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import { GitHubRepos } from "../type/GitHubRepos";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage
});

export const dataReposResponse = atom<GitHubRepos>({
  key: "dataReposResponse",
  default: {},
  effects_UNSTABLE: [persistAtom]
});
