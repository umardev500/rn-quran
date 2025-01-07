import {Quran} from '@typed';
import {useCallback, useEffect, useState} from 'react';
import {fetchQuranData} from '@utils';

export const useLoadQuran = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Quran[]>([]);
  const [err, setErr] = useState<Error | null>(null);

  const loadQuran = useCallback(async () => {
    setLoading(true);
    setErr(null); // Reset error before starting

    try {
      const quranData = await fetchQuranData();
      setData(quranData);
    } catch (error) {
      setErr(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuran();
  }, []);

  return {loading, data, err};
};
