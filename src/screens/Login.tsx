import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../hooks/redux';
import { PrimaryButton, PrimaryInput } from '../components';
import { isValidEmail } from '../util/validation';
import { loginSuccesss, updateCurrentUser } from '../store/reducers/authSlice';
import { COLORS } from '../config/Constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>('');
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
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

    setPasswordError(null);
  };

  const onSumbit = () => {
    if (!isValid.email || password?.length === 0) {
      setEmailError('Enter valid details');
      setPasswordError('Enter valid details');
      return;
    }

    dispatch(updateCurrentUser(email));
    dispatch(loginSuccesss());
  };

  const toCreateAccount = () => {
    navigation.navigate('SignupScreen');
  };

  const toForgotPasswoord = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.container}>
        <Text style={styles.header}>Blockhouse</Text>

        <Text style={styles.login}>Login</Text>

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
          errormessage={passwordError}
        />

        <View style={styles.forgot_password_view}>
          <TouchableOpacity onPress={toForgotPasswoord}>
            <Text style={styles.forgot_password}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton buttonPress={onSumbit} label="Login" />

        <View style={styles.dont_have_account}>
          <Text>
            Don't have an account?{' '}
            <TouchableWithoutFeedback onPress={toCreateAccount}>
              <Text style={styles.create_acount}>Signup</Text>
            </TouchableWithoutFeedback>{' '}
            instead
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
  login: {
    marginTop: 24,
    fontSize: 24,
  },
  forgot_password_view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgot_password: {
    color: COLORS.Primary_color,
  },
  dont_have_account: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  create_acount: {
    color: '#5917b0',
  },
});
