import { Box } from "./common";

export default function Header() {
  return (
    <>
      <Box display={"flex"} backgroundColor={"#ff9900"} as="header">
        <Box color={"white"} fontSize={"40px"} fontWeight={700} margin={1}>
          イーズミー
        </Box>
      </Box>
    </>
  );
}
