"use client";

import { useQuery } from "react-query";
import RecruitmentButton from "./RecruitmentButton";
import RecruitmentList from "./RecruitmentList";
import { getRecruitments } from "../api/helper";
import SearchBar from "./SearchBar";

export default function Recruitment() {
  const { isLoading, data } = useQuery(["getRecruitments"], getRecruitments);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar />
      <RecruitmentList recruitments={data} />
      <RecruitmentButton />
    </div>
  );
}
