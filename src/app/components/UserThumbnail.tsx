import React from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

type Props = {
    name: string,
    profileImageUrl: string
};

function UserThumbnail({ name, profileImageUrl }: Props) {
  return (
    <Flex alignItems="center">
      <Avatar size="sm" src={profileImageUrl} />
      <Box ml={2}>
        <Text fontWeight="bold">{name}</Text>
      </Box>
    </Flex>
  );
}

export default UserThumbnail;