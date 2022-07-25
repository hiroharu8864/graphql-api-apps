import { ChangeEvent, FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { reposState } from "../../store/reposState";

export const RecoilRequest: FC = memo(() => {
  const navigate = useNavigate();
  const onClickRecoilResult = useCallback(() => {
    navigate("/recoilresult");
  }, [navigate]);

  const [repositoryName, setReposirotyName] = useRecoilState(reposState);

  const onChangeRepositoryName = (event: ChangeEvent<HTMLInputElement>) => {
    setReposirotyName(event.target.value);
  };

  return (
    <>
      <h3>Recoil Request Test</h3>
      <p></p>
      <input
        value={repositoryName}
        onChange={onChangeRepositoryName}
        placeholder="リポジトリ対象ユーザ入力"
      />
      <button onClick={onClickRecoilResult}>Get Recoil RESULT</button>
    </>
  );
});
