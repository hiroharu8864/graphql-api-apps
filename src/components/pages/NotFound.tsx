import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";

export const NotFound: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <FormContainer>
        <h3>404 Not Found</h3>
        <MainButton onClick={onClickHome}>Go To Home</MainButton>
      </FormContainer>
    </>
  );
});
