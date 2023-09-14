"use client";

import {
  Card,
  Flex,
  Text,
  HStack,
  Stack,
  VStack,
} from "@/app/components/common";
import { getQuestion, getRoomChat } from "@/app/api/helper";
import { useQuery } from "react-query";
import { getShortTime } from "@/app/lib/format";

export default function Question() {
  const currentUserId = 2;
  const { isLoading, data } = useQuery(["getQuestion", 1], () =>
    getQuestion(1)
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const sortedData = data.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <Stack
      spacing={4}
      margin="auto"
      padding={3}
      border={"1px"}
      borderColor={"#D3D3D3"}
      borderRadius={10}
      mt={20}
      height={"2xl"}
      overflowY={"auto"}
    >
      {sortedData.map(({ body, user, created_at }) => {
        const isSelf = user.id == currentUserId;

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
