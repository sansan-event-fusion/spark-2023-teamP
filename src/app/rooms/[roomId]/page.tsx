"use client";

import {
  Card,
  Flex,
  Text,
  HStack,
  Stack,
  VStack,
} from "@/app/components/common";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import { useCurrentUser } from "@/app/state/hooks";
import { getRoomChat } from "@/app/api/helper";
import { getShortTime } from "@/app/lib/format";

type Params = {
  roomId: string;
};

export default function Room() {
  const params = useParams() as Params;
  const currentUser = useCurrentUser()!;

  const roomId = Number(params.roomId);
  const { isLoading, data } = useQuery(["getRoomChat", roomId], () =>
    getRoomChat(roomId)
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={4} w={"90%"} margin="auto">
      {data.map(({ body, user, created_at }) => {
        const isSelf = user.id == currentUser.id;

        return (
          <Flex
            key={created_at.toString()}
            justifyContent={isSelf ? "flex-end" : "flex-start"}
          >
            <VStack alignItems={isSelf ? "flex-end" : "flex-start"}>
              <Text>{user.name}</Text>
              <HStack flexDirection={isSelf ? "row-reverse" : "row"}>
                <Card
                  bg="lightgray"
                  width="70%"
                  padding={4}
                  borderRadius={10}
                  boxShadow="none"
                >
                  {body}
                </Card>
                <Text alignSelf="end" fontSize="0.8em" color="gray">
                  {getShortTime(created_at)}
                </Text>
              </HStack>
            </VStack>
          </Flex>
        );
      })}
    </Stack>
  );
}
