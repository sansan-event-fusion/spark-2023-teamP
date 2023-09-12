import React from 'react';
import { BoxProps, Text } from '@chakra-ui/react';
import Capsule from './Capsule';

type Props = {
    recruitment: {
        participantsCount: number,
        peopleLimit: number
    }
} & BoxProps;

function ParticipantsCount(props: Props) {
  const { recruitment: { participantsCount, peopleLimit } } = props;

  return (
    <Capsule
        bg="lightgray"
        {... props}
    >
        <Text>{participantsCount}人/{peopleLimit}人</Text>
    </Capsule>
  );
}

export default ParticipantsCount;