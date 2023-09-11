"use client";

import { useQuery } from "react-query";
import RecruitmentList from "./RecruitmentList";
import { getRecruitments } from "../api/helper";

export default function Recruitment() {
  const { isLoading, data } = useQuery(["getRecruitments"], getRecruitments);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (<RecruitmentList recruitments={data}/>);
}
