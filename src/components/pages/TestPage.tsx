import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormContainer } from "../molecules/FormContainer";
import { MainButtonWithDisabled } from "../atoms/MainButtonWithDisabled";
import { InputTest } from "../atoms/InputTest";

export const TestPage: FC = memo(() => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const checkValue = event.target.value;
    if (!checkValue) {
      setNameError("リポジトリ対象ユーザを入力してください。");
      setButtonDisabled(false);
    } else {
      setNameError("");
      setButtonDisabled(true);
    }
  };
  const navigate = useNavigate();
  const onClickFetch = useCallback(() => {
    navigate("/fetch");
  }, [navigate]);

  return (
    <>
      <FormContainer>
        <h2>handleBlur Test Page</h2>
        <InputTest
          maxlength="20"
          value={name}
          onChange={onChangeName}
          onBlur={handleBlur}
          placeholder="リポジトリ対象ユーザ入力"
        />
        <button onClick={onClickFetch} disabled={!buttonDisabled}>
          API出力結果確認
        </button>
        <MainButtonWithDisabled
          onClick={onClickFetch}
          disabled={!buttonDisabled}
        >
          API出力結果確認
        </MainButtonWithDisabled>

        {nameError && (
          <h5>
            <font color="red">{nameError}</font>
          </h5>
        )}
      </FormContainer>
    </>
  );
});
