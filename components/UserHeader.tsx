import React from 'react';
import {
  HStack,
  Avatar,
  AvatarFallbackText,
  VStack,
  Heading,
} from '@gluestack-ui/themed';

export const UserHeader = ({name}) => {
    return (
      <HStack paddingTop="$8" w="100%" justifyContent="center">
        <VStack alignItems="center">
          <Avatar bgColor="$brandPrimary" size="lg" borderRadius="$full">
            <AvatarFallbackText>{name}</AvatarFallbackText>
          </Avatar>
          <VStack marginTop="$4" paddingLeft="$2" justifyContent="flex-start">
            <Heading size="xl" color="$brandPrimary">{name}</Heading>
          </VStack>
        </VStack>
      </HStack>
    );
};