import { TRecruitment } from "../type";
import RecruitmentCard from "./RecruitmentCard";
import { VStack } from "./common";

export default function RecruitmentList({recruitments}: {recruitments: TRecruitment[]}) {
  return (
    <VStack spacing={4} as="ul">
      {recruitments.map((recruitment) => (
        <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
      ))}
    </VStack>
  );
}
