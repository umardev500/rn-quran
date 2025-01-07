import {SurahListing} from '@components';
import {useNavigation} from '@react-navigation/native';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {SuraData} from '@typed';
import {useCallback} from 'react';

type SuarhListProps = {
  data: SuraData[];
};

export const SurahList: React.FC<SuarhListProps> = ({data}) => {
  const navigation = useNavigation();

  const handlePress = useCallback((index: number) => {
    navigation.navigate('Read', {sura: index});
  }, []);

  const renderItem: ListRenderItem<SuraData> = useCallback(
    ({item}) => <SurahListing onPress={handlePress} item={item} />,
    [],
  );

  return (
    <FlashList data={data} renderItem={renderItem} estimatedItemSize={80} />
  );
};
