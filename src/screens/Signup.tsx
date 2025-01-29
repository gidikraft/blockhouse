import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton, PrimaryInput } from '../components';
import { isValidEmail, isValidPassword } from '../util/validation';
import { useAppDispatch } from '../hooks/redux';
import { loginSuccesss } from '../store/reducers/authSlice';
import { COLORS } from '../config/Constants';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [emailError, setEmailError] = useState<string | null>('');
  const [passwordError, setPasswordError] = useState<string | null>('');
  const [confirmPassError, setConfirmPasswordError] = useState<string | null>(
    '',
  );
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleEmail = (text: string) => {
    if (!isValidEmail(email)) {
      setEmailError('Enter a valid email');
    } else {
      setEmailError(null);
      setIsValid({ ...isValid, email: true });
    }

    setEmail(text);
  };

  const handlePassword = (text: string) => {
    setPassword(text);

    if (!isValidPassword(password)) {
      setPasswordError('Enter a valid password');
    } else {
      setPasswordError(null);
      setIsValid({ ...isValid, password: true });
    }
  };

  const handleConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    console.log(password, text);

    if (password !== text) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError(null);
      setIsValid({ ...isValid, confirmPassword: true });
    }
  };

  const onSumbit = () => {
    if (
      !isValid.confirmPassword ||
      !isValid.email ||
      !isValid.confirmPassword
    ) {
      return;
    } else {
      dispatch(loginSuccesss());
    }
  };

  const toLogin = useCallback(() => {
    navigation.navigate('LoginScreen');

    return;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.container}>
        <Text style={styles.header}>Blockhouse</Text>

        <Text style={styles.create_account}>Create an account</Text>

        <PrimaryInput
          label="Email"
          value={email}
          onChangeText={handleEmail}
          placeholder="Enter email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          errormessage={emailError}
        />

        <PrimaryInput
          label="Password"
          value={password}
          onChangeText={handlePassword}
          placeholder="Enter password"
          secureTextEntry
          spellCheck={false}
          errormessage={passwordError}
        />
        <Text style={styles.password_hint}>
          Password must be between 8-20 characters, conytain one at least one
          number and one capital letter
        </Text>

        <PrimaryInput
          label="Confirm password"
          value={confirmPassword}
          onChangeText={handleConfirmPassword}
          placeholder="Confirm password"
          secureTextEntry
          errormessage={confirmPassError}
        />

        <PrimaryButton buttonPress={onSumbit} label="Sign in" />

        <View style={styles.have_account}>
          <Text>
            Already have an account?{' '}
            <TouchableWithoutFeedback onPress={toLogin}>
              <Text style={styles.signin}>Login</Text>
            </TouchableWithoutFeedback>{' '}
            instead
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 150,
    textAlign: 'center',
    fontSize: 48,
    fontFamily: 'DMSans-Bold',
  },
  password_hint: {
    fontSize: 12,
    color: COLORS.Secondary_color,
  },
  create_account: {
    marginTop: 24,
    fontSize: 24,
  },
  have_account: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signin: {
    color: '#5917b0',
  },
});
