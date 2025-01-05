import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

type TabBarButtonProps = {
  onPress: any;
  style: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

export const TabBarButton: React.FC<TabBarButtonProps> = ({
  onPress,
  style,
  children,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={style}
      children={children}
    />
  );
};

export const getTabBarButton = (props: BottomTabBarButtonProps) => {
  return (
    <TabBarButton
      onPress={props.onPress}
      style={props.style}
      children={props.children}
    />
  );
};
