import { Box } from "./common";

export default function Header() {
  return (
    <>
      <Box
        display={"flex"}
        background={"linear-gradient(0deg, #FCAF17, #ff7700)"}
        as="header"
      >
        <Box color={"white"} fontSize={"40px"} fontWeight={700} margin={1}>
          イーズミー
        </Box>
      </Box>
    </>
  );
}
