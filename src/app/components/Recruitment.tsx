"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import RecruitmentButton from "./RecruitmentButton";
import RecruitmentList from "./RecruitmentList";
import { getRecruitmentsList } from "../api/helper";
import SearchBar from "./SearchBar";
import { TCondition } from "../type";

export default function Recruitment() {
  const [condition, setCondition] = useState<TCondition>({ keyword: undefined, targets: undefined });
  const { isLoading, data } = useQuery(["getRecruitments", condition], () => getRecruitmentsList(condition));

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar onChange={setCondition} />
      <RecruitmentList recruitments={data} />
      <RecruitmentButton />
    </div>
  );
}
