"use client";

import UserThumbnail from "@/app/components/UserThumbnail";
import { useQuery } from "react-query";
import { Box, Button, Flex, Image, Text } from "../../components/common";
import { useMocked, useCurrentUser, useSignedIn } from "@/app/state/hooks";
import { applyRecruitment, getRecruitmentDetail } from "@/app/api/helper";
import ParticipantsCount from "@/app/components/ParticipantsCount";
import Capsule from "@/app/components/Capsule";
import { getColorScheme } from "@/app/target";

export default function Article({ params }: { params: { slug: string } }) {
  const signedIn = useSignedIn();
  const mocked = useMocked();
  const currentUser = useCurrentUser();

  let recruitmentId = Number(params.slug);
  const { isLoading, data } = useQuery(["getRecruitmentDetail", recruitmentId], () =>
    getRecruitmentDetail(recruitmentId)
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  async function handleApply() {
    if (!signedIn) {
      console.log("You are not logged in");
      return;
    }

    if (mocked) {
      console.log("apply");
      console.log({
        recruitmentId: recruitmentId,
        userId: currentUser!.id
      });
      return;
    }

    await applyRecruitment(recruitmentId, currentUser!.id);
  }

  return (
    <Box width="375px" margin="auto">
      <UserThumbnail user={data.user} margin="0.5em 0" />
      <Image src={data.recruitment.imageUrl} alt="Article Image" width="100%" />
      <h1>
        <Text fontSize="1.6em">{data.recruitment.title}</Text>
      </h1>
      <Flex justifyContent="end">
        <ParticipantsCount recruitment={data.recruitment} fontSize="0.8em" />
      </Flex>
      <Box margin="1em 0">
        <Text>{data.recruitment.description}</Text>
      </Box>
      <dl>
        <dt>
          <Text>対象者</Text>
        </dt>
        <dd>
          {data.recruitment.targets.map((label) => (
            <Capsule
              key={label}
              bg={getColorScheme(label)}
              fontSize="0.8em"
              marginRight="0.5em"
            >
              <Text>{label}</Text>
            </Capsule>
          ))}
        </dd>
        <dt>
          <Text>募集人数</Text>
        </dt>
        <dd>
          <Text>{data.recruitment.peopleLimit}</Text>
        </dd>
        <dt>
          <Text>対象地域</Text>
        </dt>
        <dd>
          <Text>{data.recruitment.area}</Text>
        </dd>
      </dl>
      <Button onClick={handleApply} bg="#ff9900" color="white" width="100%" marginTop="1em">
        応募する
      </Button>
    </Box>
  );
}
