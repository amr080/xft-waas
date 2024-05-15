import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  ButtonText,
  Box,
  Text,
  Heading,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorText,
  Input,
  InputField,
  Spinner
} from '@gluestack-ui/themed';
import {
  getRegistrationData,
  bootstrapDevice,
  generateAddress,
  createMPCWallet,
  waitPendingMPCWallet,
  computeMPCWallet,
} from '@coinbase/waas-sdk-react-native';
import {
  setDevice,
  setDeviceGroupName,
  setWallet,
  setAddress,
  setPool,
  setPasscode as storePasscode
} from '../app/global';
import { createPool, registerDevice } from '../api/apiCalls';
import { config as AppConfig } from '../app.config';
import { retry } from '../utils/utils';

export const GetStarted = ({navigation}) => {

  const dispatch = useDispatch();

  const [passcode, setPasscode] = useState("");
  const [creatingWallet, setCreatingWallet] = useState(false);

  const createWallet = async () => {
    setCreatingWallet(true);
    try {
      const poolDisplayName = `My Pool (${Math.floor(Math.random() * 1000)})`
      const pool = await createPool(poolDisplayName);
      dispatch(setPool(pool));

      await bootstrapDevice(passcode);
      dispatch(storePasscode(passcode));

      const regData = await getRegistrationData();
      const registeredDevice = await registerDevice(regData);
      dispatch(setDevice(registeredDevice));

      const createMpcWalletResponse = await createMPCWallet(
        pool?.name,
        registeredDevice?.name
      );
      dispatch(setDeviceGroupName(createMpcWalletResponse.DeviceGroup));

      const MAX_RETRIES = 5;
      const DELAY_MS = 1000;
      
      await retry(computeMPCWallet, MAX_RETRIES, DELAY_MS, createMpcWalletResponse.DeviceGroup, passcode);

      const createdWallet = await waitPendingMPCWallet(
        createMpcWalletResponse.Operation as string
      );
      dispatch(setWallet(createdWallet));

      const createdAddress = await generateAddress(
        createdWallet?.Name as string,
        AppConfig.defaultNetwork
      );
      dispatch(setAddress(createdAddress));

      setCreatingWallet(false);
      navigation.navigate('Home');
    } catch (error) {
      setCreatingWallet(false);
      console.log(error);
    }
  };

  const recoverWallet = () => {
      navigation.navigate('RecoverWallet');
  }

  const title = "Get started"
  const description = "Create a passcode to secure your wallet."
  return (
    <Box flex={1} bg="$background" h="100%" padding="$2">
        <Box
          alignItems="left"
          marginTop="$12"
          flex={1}
          >
          <Box w="$80">
            <Heading size="2xl" color="$textInverse">{title}</Heading>
            <Text color="$textInverse">{description}</Text>
          </Box>

          <Box h="$32" w="$full" marginTop="$8">
            <FormControl
              size="sm"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
            >
              <FormControlLabel mb="$1">
                <FormControlLabelText color="$textInverse">Passcode</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField type="password" placeholder="Passcode" value={passcode} onChangeText={value => setPasscode(value)}/>
              </Input>
              <FormControlHelper>
                <FormControlHelperText>
                  6 character minimum
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorText>
                  Atleast 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </Box>
        </Box>
      <Button
          size="md"
          variant="solid"
          action="primary"
          isDisabled={passcode.length <= 0}
          isFocusVisible={false}
          onPress={() => createWallet()}
          marginBottom="$4"
      >
          { creatingWallet && <Spinner color="$text" /> }
          { !creatingWallet && <ButtonText color="$text">Create wallet</ButtonText> }
      </Button>
      <Button
          size="md"
          variant="solid"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => recoverWallet()}
      >
          <ButtonText>Recover wallet</ButtonText>
      </Button>
    </Box>
  );
};