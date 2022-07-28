import { useRecoilValue, useRecoilState } from "recoil";
import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

import { GitHubRepos } from "../type/GitHubRepos";
import { textReposState } from "../store/textReposState";
import { dataReposResponse } from "../store/dataReposResponse";

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
const first = 100;

export const useGetRepos = () => {
  const loginUserReposName = useRecoilValue(textReposState);

  const access_token = "ghp_token";
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${access_token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  const { data, error } = useSWR<GitHubRepos>(
    [getLoginUserReposQuery, loginUserReposName, first],
    (query, loginUser, firstFetchNums) =>
      client.request(query, {
        loginUser: loginUserReposName,
        firstFetchNums: first
      }),
    {
      suspense: true
    }
  );

  /** APIのResponseをRecoilに格納 */
  const [resData, setResData] = useRecoilState(dataReposResponse);
  setResData(data);
  return { data, error };
};
