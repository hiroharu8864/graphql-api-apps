import { ChangeEvent, FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";
import { Input } from "../atoms/Input";
import { textReposState } from "../../store/textReposState";

export const Home: FC = memo(() => {
  const [reposName, setReposName] = useRecoilState(textReposState);

  const onChangeReposName = (event: ChangeEvent<HTMLInputElement>) => {
    setReposName(event.target.value);
  };

  const navigate = useNavigate();
  const onClickFetch = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  const onClickFetchCsv = useCallback(() => {
    navigate("/fetchcsv");
  }, [navigate]);

  return (
    <>
      <FormContainer>
        <h1>GitHub GraphQL API</h1>
        <h2>「{reposName}」</h2>
        <p>のpublicリポジトリを取得します。</p>
        <Input
          maxlength="20"
          value={reposName}
          onChange={onChangeReposName}
          placeholder="リポジトリ対象ユーザ入力"
        />
        <MainButton onClick={onClickFetch}>API出力結果確認</MainButton>
        <MainButton onClick={onClickFetchCsv}>API出力結果CSV出力</MainButton>
      </FormContainer>
    </>
  );
});
