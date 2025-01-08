import {DocumentDirectoryPath} from '@dr.pogodin/react-native-fs';
import {Quran} from '@typed';
import {NitroSQLite} from 'react-native-nitro-sqlite';
import {copyFromAssets} from '@utils';

/**
 * Copies the Quran database from assets to the documents directory.
 * @throws Throws an error if copying fails.
 */
export const copyQuranAssetsToDocuments = async () => {
  const srcPath = 'custom/quran.db';
  const dstPath = DocumentDirectoryPath + '/quran.db';

  try {
    await copyFromAssets(srcPath, dstPath);
    console.log('Quran database copied to documents directory');
  } catch (error) {
    throw new Error('Failed to copy Quran assets: ' + error);
  }
};

/**
 * Fetches Quran data from the SQLite database.
 * @returns A promise that resolves with an array of Quran data.
 * @throws Throws an error if data fetching fails.
 */
export const fetchQuranData = async (sura: number): Promise<Quran[]> => {
  const trTable = 'id_translation';

  try {
    const db = NitroSQLite.open({name: 'quran.db'});
    const query = `
      SELECT qt.*, tr.text as tr_text 
      FROM quran_text qt 
      JOIN ${trTable} tr 
      ON qt.sura = tr.sura AND qt.aya = tr.aya
      WHERE qt.sura = ${sura}
    `;
    const quran = await db.executeAsync(query);
    const quranLen = quran.rows?.length || 0;
    const qurans: Quran[] = [];

    // Collect Quran rows into an array
    for (let i = 0; i < quranLen; i++) {
      qurans.push(quran.rows?.item(i) as Quran);
    }

    return qurans;
  } catch (error) {
    throw new Error(
      'Failed to load Quran data: ' +
        (error instanceof Error ? error.message : error),
    );
  }
};
