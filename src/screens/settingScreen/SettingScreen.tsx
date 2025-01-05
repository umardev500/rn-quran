import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SettingScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{paddingTop: insets.top}}>
      <Text>Setting Screen</Text>
    </View>
  );
};
