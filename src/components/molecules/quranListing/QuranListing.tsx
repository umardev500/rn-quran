import {Quran} from '@typed';
import {Text, View} from 'react-native';

type QuranListingProps = {
  item: Quran;
};

export const QuranListing: React.FC<QuranListingProps> = ({item}) => {
  // Remove the specific circle (U+06DF)
  const cleanedText = item.text.replace(/\u06DF/g, '');

  return (
    <View className="px-4 py-4 border-b border-b-gray-200">
      <View className="flex-1 flex-row justify-end py-2">
        {/* <Text className="font-roboto">{Number(item.index)}</Text> */}
        <Text className="text-3xl font-uthmanic_hafs text-right leading-[1.7]">
          {' '}
          {cleanedText}
          <Text className="text-teal-800"> ٤</Text>
        </Text>
      </View>

      {/* Translation */}
      <View className="flex-row gap-2 mt-2 pb-4">
        <Text className="font-roboto text-base font-medium text-teal-700">
          {Number(item.aya)}.
        </Text>
        <Text className="font-roboto text-base font-medium text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisi dolore iros
        </Text>
      </View>
    </View>
  );
};
