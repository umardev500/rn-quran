import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SurahScreen = () => {
  const insets = useSafeAreaInsets();

  return <View style={{paddingTop: insets.top, flex: 1}}>{/*  */}</View>;
};
