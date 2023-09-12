import { Button, Link } from "./common";

export default function RecruitmentButton() {
  return (
    <Link as="a" href="/recruitment">
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
    </Link>
  );
}
