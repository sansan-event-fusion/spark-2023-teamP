import { Button } from "./common";

export default function RecruitmentButton() {
  return (
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
  );
}
