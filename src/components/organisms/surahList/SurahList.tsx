import {Text} from '@react-navigation/elements';
import {FlashList} from '@shopify/flash-list';
import {View} from 'react-native';

export const SurahList = () => {
  const data = [{title: 'First item'}];
  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <FlashList data={data} renderItem={renderItem} estimatedItemSize={4} />
  );
};
