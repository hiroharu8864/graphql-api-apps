import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";
import { Input } from "../atoms/Input";

export const Home: FC = memo(() => {
  /** Recoil設定 */
  const [reposName, setReposName] = useState("");

  const onChangeReposName = (event: ChangeEvent<HTMLInputElement>) => {
    setReposName(event.target.value);
  };

  const navigate = useNavigate();
  const onClickFetchCsv = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);
  // const onClickPassValue = useCallback(() => {
  //   navigate("/passvalue", { state: { reposName: { reposName } } });
  // }, [reposName, navigate]);
  const onClickRecoilRequest = useCallback(() => {
    navigate("/recoilrequest");
  }, [navigate]);

  return (
    <>
      <FormContainer>
        <h3>GraphQL API</h3>
        <p>「{reposName}」</p>
        <p>のpublicリポジトリを取得します。</p>
        <Input
          value={reposName}
          onChange={onChangeReposName}
          placeholder="リポジトリ対象ユーザ入力"
        />
        <MainButton onClick={onClickFetchCsv}>GraphQL API</MainButton>
        {/* <MainButton onClick={onClickPassValue}>Pass Value Test</MainButton> */}
        <MainButton onClick={onClickRecoilRequest}>Recoil TEST</MainButton>
      </FormContainer>
    </>
  );
});
