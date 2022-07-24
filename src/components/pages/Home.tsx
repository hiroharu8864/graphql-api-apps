import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";
import { Input } from "../atoms/Input";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCsv = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);

  return (
    <>
      <FormContainer>
        <h3>GraphQL API</h3>
        {/* <Input placeholder="リポジトリ対象ユーザ入力" /> */}
        <MainButton onClick={onClickFetchCsv}>GraphQL API</MainButton>
      </FormContainer>
    </>
  );
});
