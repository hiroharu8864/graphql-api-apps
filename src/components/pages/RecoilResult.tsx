import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const RecoilResult: FC = memo(() => {
  const navigate = useNavigate();
  const onClickRecoilRequst = useCallback(() => {
    navigate("/recoilrequest");
  }, [navigate]);

  return (
    <>
      <h3>Recoil Result is</h3>
      <p>Pass Value is</p>
      <button onClick={onClickRecoilRequst}>INPUT PAGE</button>
    </>
  );
});
