import React from 'react';
import {
  Text,
  HStack,
  VStack,
  Icon,
  Pressable,
} from '@gluestack-ui/themed';
import { ChevronRight } from 'lucide-react-native';

export const BackupWalletCell = ({title, onPress}) => {
    return (
      <Pressable onPress={onPress}  p="$4" w="100%">
        <HStack pt="$4" pb="$4" w="100%" justifyContent="space-between">
          <HStack alignItems="center">
            <VStack margin="$2" justifyContent="flex-start">
              <Text size="lg" color="$textInverse">{title}</Text>
            </VStack>
          </HStack>
          <VStack margin="$2">
              <Icon as={ChevronRight} color="$textInverse" size={16} />
          </VStack>
        </HStack>
      </Pressable>
    );
}