import {AppBar, QuranList} from '@components';
import {useLoadQuran} from '@hooks';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ReadScreen = () => {
  const insets = useSafeAreaInsets();
  const {loading, data} = useLoadQuran(1);

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
