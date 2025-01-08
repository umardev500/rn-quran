export type RootStackParamList = {
  HomeTabs: undefined;
  Read: {sura: number; aya?: number; tname: string};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
