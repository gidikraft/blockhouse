import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { PrimaryButton, PrimaryInput } from '../components';
import { COLORS } from '../config/Constants';

const ForgotPassword = () => {
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.container}>
        <Text style={styles.forgot_password}>Reset password</Text>

        <PrimaryInput
          label="OTP"
          value={otp}
          onChangeText={text => setOtp(text)}
          placeholder="Enter otp"
          keyboardType="numeric"
        />

        <View style={styles.resend_code_view}>
          <TouchableOpacity>
            <Text style={styles.resend_code}>Resend code</Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton label="Reset password" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  forgot_password: {
    fontSize: 24,
  },
  resend_code_view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  resend_code: {
    color: COLORS.Primary_color,
  },
});
