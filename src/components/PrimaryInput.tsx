import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../config/Constants';

type InputProps = TextInputProps & {
  testID?: string;
  placeholder?: string;
  label?: string;
  errormessage?: string | null;
  onChangeText: (text: string) => void;
};

const PrimaryInput = (props: InputProps) => {
  const [focus, setFocus] = useState(false);
  const { testID, placeholder, label, errormessage, onChangeText } = props;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          {
            borderColor: focus ? COLORS.Primary_color : COLORS.Secondary_color,
          },
        ]}>
        <TextInput
          testID={testID}
          onSubmitEditing={props.onSubmitEditing}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          blurOnSubmit={props.blurOnSubmit}
          enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically}
          passwordRules={props.passwordRules}
          onChangeText={onChangeText}
          // spellCheck={props.spellCheck}
          textContentType={props.textContentType}
          secureTextEntry={props.secureTextEntry}
          style={styles.input}
          returnKeyType="done"
        />
      </View>

      {errormessage && <Text style={styles.error_message}>{errormessage}</Text>}
    </View>
  );
};

export default PrimaryInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  input: {
    height: 40,
    // marginVertical: 4,
    padding: 10,
    fontSize: 15,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 4,
  },
  label: {
    fontSize: 12,
    color: COLORS.Primary_color,
  },
  error_message: {
    fontSize: 12,
    color: COLORS.Error,
  },
});
