import { FC, memo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MainButton } from "../atoms/MainButton";

type passValue = {
  state: State;
};
type State = {
  reposName: string;
};

export const PassValue: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // const location: passValue = useLocation();
  // console.log(location?.state.reposName);

  return (
    <>
      <h3>Pass Value Test</h3>
      <p>Pass Value is</p>
      <MainButton onClick={onClickHome}>Go To Home</MainButton>
    </>
  );
});
