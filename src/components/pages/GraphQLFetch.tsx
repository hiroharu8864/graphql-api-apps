import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useGetRepos } from "../../hooks/useGetRepos";
import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";

const ResultComponent = () => {
  const { data, error } = useGetRepos();
  console.log(data);
  console.log(error);

  return (
    <>
      <h1>のリポジトリ</h1>
      {data?.repositoryOwner.repositories.edges.map((repos) => (
        <ul key={repos.node.name}>
          <li>{repos.node.name}</li>
          <li>{repos.node.createdAt}</li>
        </ul>
      ))}
    </>
  );
};

export const GraphQLFetch: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <FormContainer>
        <h3>Result CSV Files</h3>
        <p>APIデータ取得後、リンク出力</p>
        <br />

        <Suspense fallback={<p>...データ取得中</p>}>
          <ResultComponent />
        </Suspense>

        <MainButton onClick={onClickHome}>Go To Home</MainButton>
      </FormContainer>
    </>
  );
});
