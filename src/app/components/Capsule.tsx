import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

function Capsule(props: BoxProps) {
  return (
    <Box
      p={4}
      borderRadius="full"
      lineHeight="1"
      display="inline-block"
      padding="0.5em 1em"
      {...props}
    />
  );
}

export default Capsule;