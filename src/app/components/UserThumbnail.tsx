import React from 'react';
import { Box, Flex, Avatar, Text, FlexProps } from '@chakra-ui/react';

type Props = {
  user: {
    name: string,
    profileImageUrl: string
  }
} & FlexProps;

function UserThumbnail(props: Props) {
  const { user: { name, profileImageUrl }} = props;

  return (
    <Flex alignItems="center" {...props}>
      <Avatar size="sm" src={profileImageUrl} />
      <Box ml={2}>
        <Text>{name}</Text>
      </Box>
    </Flex>
  );
}

export default UserThumbnail;