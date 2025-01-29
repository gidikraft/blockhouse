import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { COLORS } from '../config/Constants';

type ButtonProps = TouchableOpacityProps & {
  buttonPress?: () => void;
  label: string;
  captionstyle?: TextStyle;
};

const PrimaryButton = (props: ButtonProps) => {
  const { buttonPress, label, captionstyle } = props;

  return (
    <TouchableOpacity onPress={buttonPress} style={styles.button}>
      <Text style={[styles.label, captionstyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.Primary_color,
    marginTop: 24,
  },
  label: {
    color: COLORS.White,
    fontSize: 14,
  },
});
