"use client";

import UserThumbnail from "@/app/components/UserThumbnail";
import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { Box, Button, Flex, Image, Text } from "../../components/common";
import { useMocked, useCurrentUser, useSignedIn } from "@/app/state/hooks";
import { applyRecruitment, getRecruitmentDetail } from "@/app/api/helper";
import ParticipantsCount from "@/app/components/ParticipantsCount";
import Capsule from "@/app/components/Capsule";
import { getColorScheme } from "@/app/target";
import QuestionBar from "@/app/components/QuestionBar";
import Question from "@/app/components/Question";

type Params = {
  recruitmentId: string;
};

export default function Article() {
  const params = useParams() as Params;
  const router = useRouter();
  const signedIn = useSignedIn();
  const mocked = useMocked();
  const currentUser = useCurrentUser();

  let recruitmentId = Number(params.recruitmentId);
  const { isLoading, data } = useQuery(
    ["getRecruitmentDetail", recruitmentId],
    () => getRecruitmentDetail(recruitmentId)
  );

  const applied = useMemo(() => {
    if (!data || !currentUser) {
      return false;
    }

    // TODO
    /*
      この実装では、ユーザーが募集主である場合にはルームに参加できるが、
      ユーザーが応募者の場合にはルームに参加できない。
    */
    /*
    return !!data.recruitment.participants.find(
      (participant) => participant.userId === currentUser.id
    );
    */
    return data.user.id == currentUser.id;
  }, [currentUser, data]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  async function handleApply() {
    if (!signedIn) {
      console.log("You are not signed in");
      return;
    }

    if (mocked) {
      console.log("apply");
      console.log({
        recruitmentId: recruitmentId,
        userId: currentUser!.id,
      });
      return;
    }

    await applyRecruitment(recruitmentId, currentUser!.id);
  }

  async function handleEnter() {
    if (!signedIn) {
      console.log("You are not signed in");
      return;
    }

    const roomId = 1; // TODO
    router.push(`/rooms/${roomId}`);
  }

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box margin="auto" width={"90%"}>
        {applied ? (
          <Button
            onClick={handleEnter}
            disabled={!signedIn}
            bg="#ff9900"
            color="white"
            width="100%"
            marginTop="1em"
          >
            ルームを見る
          </Button>
        ) : (
          <Button
            onClick={handleApply}
            disabled={!signedIn}
            bg="#ff9900"
            color="white"
            width="100%"
            marginTop="1em"
          >
            応募する
          </Button>
        )}
        <UserThumbnail user={data.user} margin="0.5em 0" />
        <Image
          src={data.recruitment.imageUrl}
          alt="Article Image"
          width="100%"
        />
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
                <Text color={"white"}>{label}</Text>
              </Capsule>
            ))}
          </dd>
          <dt>
            <Text mt={8}>募集人数</Text>
          </dt>
          <dd>
            <Text>{data.recruitment.peopleLimit}</Text>
          </dd>
          <dt>
            <Text mt={8}>対象地域</Text>
          </dt>
          <dd>
            <Text>{data.recruitment.area}</Text>
          </dd>
        </dl>
        <QuestionBar />
        <Question />
      </Box>
    </Box>
  );
}
