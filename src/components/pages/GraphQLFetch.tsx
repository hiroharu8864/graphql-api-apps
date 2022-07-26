import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { useGetRepos } from "../../hooks/useGetRepos";
import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";
import { CsvLinkDisplay } from "../pages/CsvLinkDisplay";
import { dataReposResponse } from "../../store/dataReposResponse";

const ResultComponent = () => {
  const { data, error } = useGetRepos();
  const [resData, setResData] = useRecoilState(dataReposResponse);
  setResData(data);
  console.log(resData);

  return (
    <>
      {data.repositoryOwner ? (
        <>
          <h3>リポジトリ一覧</h3>
          <CsvLinkDisplay />
        </>
      ) : (
        <p>該当ユーザのリポジトリはありません。</p>
      )}

      {data?.repositoryOwner?.repositories.edges.map((repos) => (
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
        <h3>Result</h3>
        <Suspense fallback={<p>...データ取得中</p>}>
          <ResultComponent />
        </Suspense>

        <MainButton onClick={onClickHome}>Go To Home</MainButton>
      </FormContainer>
    </>
  );
});
