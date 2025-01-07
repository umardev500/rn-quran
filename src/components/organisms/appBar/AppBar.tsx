import {Action, BackAction} from '@components/atoms';
import {AppBarContent} from '@components/molecules';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({children}) => {
  const insets = useSafeAreaInsets();
  const APPBAR_HEIGHT = 56;

  return (
    <View
      className="bg-white border-b  border-gray-200 flex-row items-center px-2"
      style={{
        paddingTop: insets.top,
        height: APPBAR_HEIGHT + insets.top,
      }}>
      {children}
    </View>
  );
};

export const AppBar = {
  Header,
  BackAction,
  Content: AppBarContent,
  Action,
};
