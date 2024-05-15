import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Box,
  Text,
  HStack,
  VStack,
  Pressable,
  Icon,
  Fab,
} from '@gluestack-ui/themed';
import { Home as HomeIcon, UserCircle2, ArrowDownUp } from 'lucide-react-native';
import { Feed } from './Feed';
import { Account } from './Account';

const Stack = createNativeStackNavigator();

export const Home = ({navigation}) => {

    const [active, setActive] = useState(0);

    return (
      <Box flex={1} bg="$background" h="100%">
        <Fab
            size="xl"
            marginBottom="$4"
            placement="bottom center"
            bg="$brandPrimary"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={() => { navigation.navigate('Pay') }}
        >
            <Icon as={ArrowDownUp} color="$text" size={38} />
        </Fab>
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }}/>
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <HStack h="$16" justifyContent="center" alignItems="center" borderTopWidth={1} borderRadius={4} borderColor="rgba(138,145,158, .2)">
            <Pressable
                flex={1}
                justifyContent="center"
                h="$full"
                onPress={() => { 
                    setActive(0)
                    navigation.navigate('Feed')
                }}
                >
                <VStack alignItems="center">
                    <Icon as={HomeIcon} color={ active === 0 ? "$brandPrimary" : "$textInverse" } size={24} />
                    <Text size="2xs" color={ active === 0 ? "$brandPrimary" : "$textInverse" }>Home</Text>
                </VStack>
            </Pressable>
            <Pressable
                flex={1}
                justifyContent="center"
                h="$full"
                onPress={() => {}}
                >
                <VStack alignItems="center">
                    <Icon as={ArrowDownUp} color="$background" size={24} />
                    <Text size="2xs" color="$textInverse">Pay/Request</Text>
                </VStack>
            </Pressable>
            <Pressable
                flex={1}
                justifyContent="center"
                h="$full"
                onPress={() => {
                    setActive(1)
                    navigation.navigate('Account')
                }}
                >
                <VStack alignItems="center">
                    <Icon as={UserCircle2} color={ active === 1 ? "$brandPrimary" : "$textInverse" } size={24} />
                    <Text size="2xs" color={ active === 1 ? "$brandPrimary" : "$textInverse" }>Me</Text>
                </VStack>
            </Pressable>
        </HStack>
      </Box>
    );
  };