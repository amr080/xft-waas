import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {
  Button,
  ButtonText,
  Box,
  Image,
  Heading,
  FormControl,
  Input,
  InputField,
  Spinner
} from '@gluestack-ui/themed';
import { setUsername as storeUsername, setEmail as storeEmail } from '../app/global'
import { config as AppConfig } from '../app.config';

export const SignIn = ({navigation}) => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const signUp = () => {
    setSigningIn(true);
    dispatch(storeUsername(username));
    dispatch(storeEmail(email));
    setSigningIn(false);
    navigation.navigate('GetStarted');
  }

  return (
    <Box flex={1} bg="$background" h="100%" padding="$2">
        <Box
          flex={1}
          alignItems="center"
          marginTop="$16"
          >
          <Image
            alt="logo"
            height={140}
            width={140}
            borderRadius="$full"
            source={require('../assets/logo.png')}
          />
          <Heading fontWeight={900} pt="$5" size="2xl" color="$textInverse">{AppConfig.theme.appName}</Heading>
          <Box w="$full" marginTop="$8">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <Input marginBottom="$4">
                <InputField type="text" placeholder="Username" value={username} onChangeText={value => setUsername(value)} />
              </Input>
              <Input>
                <InputField type="text" placeholder="Email" value={email} onChangeText={value => setEmail(value)} />
              </Input>
            </FormControl>
          </Box>
        </Box>
        <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={username.length <= 0 || email.length <= 0}
            isFocusVisible={false}
            onPress={() => signUp()}
          >
            { signingIn && <Spinner color="$text" /> }
            { !signingIn && <ButtonText color="$text">Sign up / Sign in</ButtonText> }
            
          </Button>
    </Box>
  );
};