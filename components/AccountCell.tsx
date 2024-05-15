import React from 'react';
import {
  Text,
  HStack,
  VStack,
  Icon,
  Pressable,
} from '@gluestack-ui/themed';
import { ChevronRight } from 'lucide-react-native';

export const AccountCell = ({title, onPress}) => {
    return (
      <Pressable onPress={onPress}  p="$4" w="100%">
        <HStack w="100%" justifyContent="space-between">
          <HStack alignItems="center">
            <VStack margin="$2" justifyContent="flex-start">
              <Text size="md" color="$textInverse">{title}</Text>
            </VStack>
          </HStack>
          <VStack margin="$2">
              <Icon as={ChevronRight} color="$textInverse" size={16} />
          </VStack>
        </HStack>
      </Pressable> 
    );
}