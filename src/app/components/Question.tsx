"use client";

import {
  Card,
  Flex,
  Text,
  HStack,
  Stack,
  VStack,
} from "@/app/components/common";
import { getQuestion } from "@/app/api/helper";
import { useQuery } from "react-query";
import { getShortTime } from "@/app/lib/format";

export default function Question() {
  const { isLoading, data } = useQuery(["getQuestion", 1], () =>
    getQuestion(1)
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  // 算術演算の左辺には、'any' 型、'number' 型、'bigint' 型、または列挙型を指定する必要があります。ts(2362)
  // 上のエラー出てて以下のコードが引っかかりCI通らないので一旦コメントアウトします(必須機能ではないため)

  // const sortedData = data.sort((a, b) => {
  //   return new Date(b.created_at) - new Date(a.created_at);
  // });

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
      {data.slice().reverse().map(({ body, created_at }) => {
        return (
          <HStack key={created_at.toString()}>
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
        );
      })}
    </Stack>
  );
}
