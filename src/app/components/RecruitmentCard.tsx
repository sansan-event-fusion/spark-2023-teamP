// import { TRecruitment } from "../type";
import { Box, Image } from "./common";
// import NextLink from "next/link";

export default function RecruitmentCard(/* {recruitment}: {recruitment: TRecruitment} */) {
  const TRecruitment = {
    id: 1,
    user_id: 1,
    name: "みちかず",
    imgUrl: "https://placehold.jp/250x150.png",
    title: "テスト投稿タイトル",
    peopleLimit: "3",
    createdAt: "2023-9-10",
    updatedAt: "2023-9-10",
  };
  return (
    <>
      {/* <NextLink href={`/recruitment/${recruitment.id}`}> */}
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mb={8}
      >
        <Image width={400} src={TRecruitment.imgUrl} alt={TRecruitment.title} />
        <Box m="3" fontWeight="bold" fontSize={20} as="h1">
          {TRecruitment.title}
        </Box>
        <Box
          display="flex"
          m="4"
          mb="4"
          alignItems="center"
          position={"relative"}
        >
          <Box as="span" color="gray.600" fontSize="sm">
            {TRecruitment.name}
          </Box>
          <Box
            as="span"
            color="gray.600"
            fontSize="sm"
            position={"absolute"}
            right={0}
          >
            {TRecruitment.peopleLimit} 人が参加中
          </Box>
        </Box>
      </Box>
      {/* </NextLink> */}
    </>
  );
}
