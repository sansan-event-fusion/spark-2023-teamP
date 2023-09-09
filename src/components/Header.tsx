import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";

export default function Header() {
  return (
    <>
      <Box display={"flex"} backgroundColor={"#ff9900"}>
        <Box color={"white"} fontSize={"40px"} fontWeight={700} margin={1}>
          イーズミー
        </Box>
      </Box>
    </>
  );
}
