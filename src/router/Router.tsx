import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { GraphQLFetch } from "../components/pages/GraphQLFetch";
import { GraphQLFetchCsv } from "../components/pages/GraphQLFetchCsv";
import { TestPage } from "../components/pages/TestPage";
import { NotFound } from "../components/pages/NotFound";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<GraphQLFetch />} />
        <Route path="/fetchcsv" element={<GraphQLFetchCsv />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
});
