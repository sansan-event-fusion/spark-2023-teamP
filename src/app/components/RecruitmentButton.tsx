import { Button } from "./common";
import NextLink from "next/link";

export default function RecruitmentButton() {
  return (
    <NextLink href="/create">
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
