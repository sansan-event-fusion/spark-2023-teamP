// import RecruitmentList from "./RecruitmentList";

import RecruitmentButton from "./RecruitmentButton";
import RecruitmentCard from "./RecruitmentCard";

// イメージを書いておきます

export default function Recruitment() {
  //   const recruitments = await getRecruitments();

  return (
    <div>
      <RecruitmentCard />
      <RecruitmentButton />
      {/* <RecruitmentList recruitments={recruitments}/> */}
    </div>
    /* 本番はRecruitmentCardじゃなくてRecruitmentListを書く */
  );
}
