import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type AppBarContentProps = {
  title: string;
};

export const AppBarContent: React.FC<AppBarContentProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text className="font-roboto text-xl font-medium text-gray-800">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
