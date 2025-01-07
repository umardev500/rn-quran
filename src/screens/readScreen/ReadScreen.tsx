import {AppBar, QuranList} from '@components';
import {useLoadQuran} from '@hooks';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@typed';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ReadScreenRouteProp = RouteProp<RootStackParamList, 'Read'>;

export const ReadScreen = () => {
  const route = useRoute<ReadScreenRouteProp>();
  const insets = useSafeAreaInsets();
  const {loading, data} = useLoadQuran(route.params.sura);

  return (
    <>
      <AppBar.Header>
        <AppBar.BackAction />
        <AppBar.Content title="Quran" />
        <AppBar.Action icon="more_vert" onPress={() => {}} />
      </AppBar.Header>
      <View
        className="bg-white"
        style={{paddingBottom: insets.bottom, flex: 1}}>
        {loading ? <Text>Loading...</Text> : <QuranList data={data} />}
      </View>
    </>
  );
};
