"use client";

import { useQuery } from "react-query";
import RecruitmentButton from "./RecruitmentButton";
import RecruitmentCard from "./RecruitmentCard";
import RecruitmentList from "./RecruitmentList";
import { getRecruitments } from "../api/helper";

export default function Recruitment() {
  const { isLoading, data } = useQuery(["getRecruitments"], getRecruitments);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RecruitmentList recruitments={data}/>
      <RecruitmentButton />
    </div>
  );
}
