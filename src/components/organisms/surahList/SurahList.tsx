import {SurahListing} from '@components';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {SuraData} from '@typed';
import {useCallback} from 'react';

type SuarhListProps = {
  data: SuraData[];
};

export const SurahList: React.FC<SuarhListProps> = ({data}) => {
  const renderItem: ListRenderItem<SuraData> = useCallback(
    ({item}) => <SurahListing item={item} />,
    [],
  );

  return (
    <FlashList data={data} renderItem={renderItem} estimatedItemSize={80} />
  );
};
