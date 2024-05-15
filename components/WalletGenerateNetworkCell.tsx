import React from 'react';
import {
  Text,
  HStack,
  Avatar,
  AvatarImage,
  VStack,
  Pressable,
} from '@gluestack-ui/themed';
import { getNetworkLogo } from '../utils/utils';

export const WalletGenerateNetworkCell = ({network, onPress}) => {

    const logo = getNetworkLogo(network.name);

    return (
      <HStack padding="$4" w="100%" justifyContent="space-between">
        <HStack alignItems="center">
          <Avatar bgColor="$transparent" size="sm" borderRadius="$full">
            <AvatarImage source={logo} />
          </Avatar>
          <VStack margin="$1" paddingLeft="$2" justifyContent="flex-start">
            <Text bold size="md" color="$textInverse">{network.displayName}</Text>
            <Pressable onPress={onPress}><Text bold size="md" color="$brandPrimary">Generate address</Text></Pressable>
          </VStack>
        </HStack>
      </HStack>
    );
};