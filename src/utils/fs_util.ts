import * as RNFS from '@dr.pogodin/react-native-fs';

export const copyFromAssets = async (
  source: string,
  destination: string,
): Promise<boolean> => {
  try {
    const fileExists = await RNFS.exists(destination);
    if (fileExists) {
      return false;
    }
    await RNFS.copyFileAssets(source, destination);
    return true;
  } catch (err) {
    throw err;
  }
};
