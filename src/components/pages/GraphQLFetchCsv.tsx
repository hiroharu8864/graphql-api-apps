import { FC, memo, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import { useRecoilValue } from "recoil";
import moment from "moment";

import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";
import { dataReposResponse } from "../../store/dataReposResponse";

const ResultComponent = () => {
  const data = useRecoilValue(dataReposResponse);

  /**
   * 空白２文字で整形して出力
   * 取得対象のオブジェクト階層を指定して、JSON展開
   */
  const dataReposJson = JSON.stringify(
    data?.repositoryOwner?.repositories?.edges,
    null,
    2
  );
  console.log(dataReposJson);
  const parseData = JSON.parse(dataReposJson);

  /**
   * CSV用のデータ作成
   */
  const headers = [
    { label: "Repository Name", key: "repositoryname" },
    { label: "Repository Create Date", key: "repositorycreatedate" }
  ];
  const csvdata = parseData.map((repository) => ({
    repositoryname: `${repository.node.name}`,
    repositorycreatedate: `${repository.node.createdAt}`
  }));
  const now = moment().format("YYYYMMDD_HHmmss");

  return (
    <>
      {data.repositoryOwner ? (
        <>
          <h3>CSVリンク</h3>
        </>
      ) : (
        <p>該当ユーザのリポジトリはありません。</p>
      )}
      <CSVLink data={csvdata} headers={headers} filename={`${now}.csv`}>
        CSV Files Download
      </CSVLink>
    </>
  );
};

export const GraphQLFetchCsv: FC = memo(() => {
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
