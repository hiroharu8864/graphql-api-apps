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

  return (
    <>
      <FormContainer>
        <h1>GitHub GraphQL API</h1>
        <h2>「{reposName}」</h2>
        <p>のpublicリポジトリを取得します。</p>
        <Input
          value={reposName}
          onChange={onChangeReposName}
          placeholder="リポジトリ対象ユーザ入力"
        />
        <MainButton onClick={onClickFetch}>GraphQL API</MainButton>
        {/* <MainButton onClick={onClickPassValue}>Pass Value Test</MainButton> */}
      </FormContainer>
    </>
  );
});
