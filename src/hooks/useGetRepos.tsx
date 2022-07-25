import { useRecoilValue } from "recoil";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { GitHubRepos } from "../type/GitHubRepos";
import { textReposState } from "../store/textReposState";

const getLoginUserReposQuery = `
query loginUserRepository($loginUser: String!, $firstFetchNums: Int!) {
  repositoryOwner(login: $loginUser) {
    repositories(privacy: PUBLIC, first: $firstFetchNums) {
      edges{
        node {
          createdAt
          name
        }
      }
    }
  }
}
`;
const firstFetchNums = 100;

export const useGetRepos = () => {
  const loginUserReposName = useRecoilValue(textReposState);
  console.log(loginUserReposName);

  const access_token = "token";
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  const { data, error } = useSWR<GitHubRepos>(
    [getLoginUserReposQuery, loginUserReposName, firstFetchNums],
    (query, loginUser, first) =>
      client.request(query, {
        loginUserReposName: loginUser,
        firstFetchNums: first
      }),
    {
      suspense: true
    }
  );

  return { data, error };
};
