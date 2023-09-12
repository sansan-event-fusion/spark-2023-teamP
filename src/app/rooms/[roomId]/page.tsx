"use client";

import {
  Card,
  Flex,
  Text,
  HStack,
  Stack,
  VStack
} from "@/app/components/common";
import { getRoomChat } from "@/app/api/helper";
import { useQuery } from "react-query";
import { getShortTime } from "@/app/lib/format";

export default function Room({ params }: { params: { roomId: number } }) {
  const currentUserId = 2;
  const { isLoading, data } = useQuery(["getRoomChat", 1], () => getRoomChat(1));

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={4} maxW={"md"} margin="auto">
      {data.map(({ body, user, created_at }) => {
        const isSelf = user.id == currentUserId;

        return (
          <Flex
            key={created_at.toString()}
            justifyContent={isSelf ? "flex-end" : "flex-start"}
          >
            <VStack
              alignItems={isSelf ? "flex-end" : "flex-start"}
            >
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
                <Text
                  alignSelf="end"
                  fontSize="0.8em"
                  color="gray"
                >
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
