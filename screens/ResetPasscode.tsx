import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {
  Button,
  ButtonText,
  Box,
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
import { setPasscode } from '../app/global';
import { resetPasscode } from '@coinbase/waas-sdk-react-native';

export const ResetPasscode = ({navigation}) => {

  const dispatch = useDispatch();

  const [newPasscode, setNewPasscode] = useState("");
  const [resettingPasscode, setResettingPasscode] = useState(false);

  const reset = async () => {
    setResettingPasscode(true);
    try {
      const res = await resetPasscode(newPasscode);
      dispatch(setPasscode(newPasscode));
      setResettingPasscode(false);
      navigation.goBack();
    } catch (err) {
      console.log(err);
      setResettingPasscode(false);
    }
  }

  const title = "Reset passcode"
  return (
    <Box flex={1} bg="$background" h="100%" padding="$2">
        <Box
          alignItems="left"
          marginTop="$12"
          flex={1}
          >
          <Box w="$80">
            <Heading size="2xl" color="$textInverse">{title}</Heading>
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
                <FormControlLabelText color="$textInverse">New passcode</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField type="password" placeholder="New passcode" value={newPasscode} onChangeText={value => setNewPasscode(value)} />
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
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => reset()}
          marginBottom="$4"
      >
        { resettingPasscode && <Spinner color="$text" /> }
        { !resettingPasscode && <ButtonText color="$text">Reset passcode</ButtonText> }
      </Button>
    </Box>
    );
  };