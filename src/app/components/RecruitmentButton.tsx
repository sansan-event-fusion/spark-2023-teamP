"use client";

import { Button } from "./common";
import NextLink from "next/link";
import { useSignedIn } from "@/app/state/hooks";

export default function RecruitmentButton() {
  const signedIn = useSignedIn();

  return (
    <NextLink href={signedIn ? "/create" : "/auth/signin"}>
      <Button
        position={"fixed"}
        right={5}
        bottom={10}
        height={"75px"}
        width={"75px"}
        fontSize={13}
        colorScheme="orange"
        borderRadius="full"
      >
        募集する
      </Button>
    </NextLink>
  );
}
