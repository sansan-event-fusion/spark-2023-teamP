import { Box, Image } from "./components/common";

export default function RecruitmentCard() {
  const recruitment = {
    id: 1,
    user_id: 1,
    imgUrl: "https://placehold.jp/250x150.png",
    title: "テスト投稿タイトル",
    peopleLimit: "3",
    createdAt: "2023-9-10",
    updatedAt: "2023-9-10",
  };
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mb={8}
      >
        <Image width={400} src={recruitment.imgUrl} alt={recruitment.title} />
        <Box m="3" fontWeight="bold" fontSize={20} as="h1">
          {recruitment.title}
        </Box>
        <Box
          display="flex"
          m="4"
          mb="4"
          alignItems="center"
          position={"relative"}
        >
          <Box as="span" color="gray.600" fontSize="sm">
            みちかず
          </Box>
          <Box
            as="span"
            color="gray.600"
            fontSize="sm"
            position={"absolute"}
            right={0}
          >
            {recruitment.peopleLimit} 人が参加中
          </Box>
        </Box>
      </Box>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mb={8}
      >
        <Image width={400} src={recruitment.imgUrl} alt={recruitment.title} />
        <Box m="3" fontWeight="bold" fontSize={20} as="h1">
          {recruitment.title}
        </Box>
        <Box
          display="flex"
          m="4"
          mb="4"
          alignItems="center"
          position={"relative"}
        >
          <Box as="span" color="gray.600" fontSize="sm">
            みちかず
          </Box>
          <Box
            as="span"
            color="gray.600"
            fontSize="sm"
            position={"absolute"}
            right={0}
          >
            {recruitment.peopleLimit} 人が参加中
          </Box>
        </Box>
      </Box>
    </>
    // <Card
    //   as={"li"}
    //   _hover={{
    //     boxShadow: "xl",
    //   }}
    //   minW="100%"
    // >
    //   <NextLink href={`/articles/${recruitment.slug}`}>
    //     <CardHeader>
    //       <Heading size="md">{recruitment.title}</Heading>
    //     </CardHeader>
    //     <CardBody>
    //       <Text>{recruitment.peopleLimit}</Text>
    //     </CardBody>
    //     <CardFooter>
    //     </CardFooter>
    //   </NextLink>
    // </Card>
  );
}
