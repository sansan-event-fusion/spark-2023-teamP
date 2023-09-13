import { TRecruitment } from "../type";
import Capsule from "./Capsule";
import { Box, Image, Text } from "./common";
import NextLink from "next/link";
import { FindColorScheme } from "../target";

export default function RecruitmentCard({
  recruitment,
}: {
  recruitment: TRecruitment;
}) {
  return (
    <>
      <NextLink href={`/recruitment/${recruitment.id}`}>
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
          <Box ms={3}>
            {recruitment.targets.map((target) => (
              <Capsule
                key={target}
                bg={FindColorScheme(target)}
                fontSize="0.8em"
                marginRight="0.5em"
              >
                <Text>{target}</Text>
              </Capsule>
            ))}
          </Box>
          <Box
            display="flex"
            m="4"
            mb="4"
            alignItems="center"
            position={"relative"}
          >
            <Box as="span" color="gray.600" fontSize="sm">
              {recruitment.name}
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
      </NextLink>
    </>
  );
}
