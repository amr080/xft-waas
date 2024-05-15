import React, { useState } from 'react';
import {
  Box,
  Text,
  HStack,
  Avatar,
  AvatarFallbackText,
  VStack,
  Pressable,
  Button,
  ButtonText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import { CheckCircle2 } from 'lucide-react-native';
import { getNetworkLogo } from '../utils/utils';
import { mockUsers } from '../data/mockUserData';

const FriendCell = ({user, onPress}) => {
    return (
        <Pressable onPress={onPress}>
        <HStack pt="$2" w="100%" justifyContent="space-between">
            <HStack alignItems="center">
            <Avatar bgColor="$brandPrimary" size="sm" borderRadius="$full">
                <AvatarFallbackText>{user.fullName}</AvatarFallbackText>
            </Avatar>
            <VStack margin="$1" paddingLeft="$2" justifyContent="flex-start">
                <Text bold size="md" color="$textInverse">{user.fullName}</Text>
                <Text size="md" color="$brandPrimaryForegroundMuted">@{user.username}</Text>
            </VStack>
            </HStack>
        </HStack>
        </Pressable>
    );
}

export const Pay = ({navigation}) => {

        const [inputValue, setInputValue] = useState("");

        return (
            <Box flex={1} h="100%" bg="$background" padding="$2">
                <Box flex={1}>
                    <Box p="$4">
                        <Text pb="$2" size="sm" color="$textInverse">To</Text>
                        <Input>
                            <InputField type="text" placeholder="Address" value={inputValue} onChangeText={value => setInputValue(value)} />
                        </Input>
                    </Box>
                    <Box p="$4">
                        <Text pb="$2" size="sm" color="$textInverse">Friends</Text>
                        <VStack gap="$4">
                            {
                                mockUsers.map((user) => {
                                    const userAddress = user.address?.Address || user.address?.address;
                                    return <FriendCell key={userAddress} user={user} onPress={() => {setInputValue(userAddress)}}/>
                                })
                            }
                        </VStack>
                    </Box>
                </Box>
                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={inputValue.length <= 0}
                    isFocusVisible={false}
                    onPress={() => {navigation.navigate('PayEntry', { address: inputValue })}}>
                    <ButtonText color="$text">Continue</ButtonText>
                </Button>
            </Box>
        )
};