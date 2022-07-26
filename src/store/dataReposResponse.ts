import { atom } from "recoil";

import { GitHubRepos } from "../type/GitHubRepos";

export const dataReposResponse = atom<GitHubRepos>({
  key: "dataReposResponse",
  default: {}
});
