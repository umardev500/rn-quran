import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SearchScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{paddingTop: insets.top}}>
      <Text>Search Screen</Text>
    </View>
  );
};
