import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../atoms/MainButton";

export const CsvLinkDisplay: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCsv = useCallback(() => {
    navigate("/fetchcsv");
  }, [navigate]);

  return (
    <>
      <MainButton onClick={onClickFetchCsv}>API出力結果CSV出力</MainButton>
    </>
  );
});
