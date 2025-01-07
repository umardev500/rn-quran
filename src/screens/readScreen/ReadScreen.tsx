import {QuranList} from '@components';
import {useLoadQuran} from '@hooks';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ReadScreen = () => {
  const insets = useSafeAreaInsets();
  const {loading, data} = useLoadQuran(1);

  return (
    <View
      className="bg-white"
      style={{paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1}}>
      {loading ? <Text>Loading...</Text> : <QuranList data={data} />}
    </View>
  );
};
