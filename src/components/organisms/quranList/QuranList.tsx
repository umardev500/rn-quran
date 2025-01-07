import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {Quran} from '@typed';
import React, {useCallback} from 'react';
import {QuranListing} from '@components';

type QuranListProps = {
  data: Quran[];
};

export const QuranList: React.FC<QuranListProps> = ({data}) => {
  const renderItem: ListRenderItem<Quran> = useCallback(
    ({item}) => <QuranListing item={item} />,
    [],
  );

  return (
    <FlashList data={data} renderItem={renderItem} estimatedItemSize={150} />
  );
};
