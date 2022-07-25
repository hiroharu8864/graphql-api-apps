import { RecoilRoot } from "recoil";
import { Router } from "../src/router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
