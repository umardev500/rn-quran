import {Text, TouchableOpacity, View} from 'react-native';

import {SuraData} from '@typed';
import {useCallback} from 'react';

type SurahListingProps = {
  item: SuraData;
  onPress?: (index: number, tname: string) => void;
};

export const SurahListing: React.FC<SurahListingProps> = ({item, onPress}) => {
  const handlePress = useCallback(() => {
    onPress && onPress(item.index, item.tname);
  }, [item]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className="shadow-md gap-2 px-4 py-3.5 bg-white mx-4 mb-2.5 rounded-xl flex-row justify-between items-center">
      <View className="flex-row p-1 flex-1 items-center gap-4">
        <Text className="text-base font-medium text-gray-800">
          {item.index}.
        </Text>
        <View className="flex-1">
          <Text className="text-base font-medium text-gray-800 font-roboto">
            {item.tname}
          </Text>
          <Text className="text-sm text-gray-500 font-roboto" numberOfLines={1}>
            {item.ename} - {item.ayas}
          </Text>
        </View>
      </View>
      <Text className="text-xl font-uthman font-semibold text-gray-800">
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
