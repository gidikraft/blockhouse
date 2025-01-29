import React from 'react';
import IIcon from 'react-native-vector-icons/Ionicons';

IIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

const MaterialIcon = ({ size, name, color }: IconProps) => (
  <IIcon name={name} size={IconSizes[size]} color={color} />
);

export default MaterialIcon;
