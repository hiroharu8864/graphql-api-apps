import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { GraphQLFetch } from "../components/pages/GraphQLFetch";
import { PassValue } from "../components/pages/PassValue";
import { RecoilRequest } from "../components/pages/RecoilRequest";
import { RecoilResult } from "../components/pages/RecoilResult";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<GraphQLFetch />} />
        <Route path="/passvalue" element={<PassValue />} />
        <Route path="/recoilrequest" element={<RecoilRequest />} />
        <Route path="/recoilresult" element={<RecoilResult />} />
      </Routes>
    </BrowserRouter>
  );
});
