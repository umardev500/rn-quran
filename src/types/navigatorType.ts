export type RootStackParamList = {
  HomeTabs: undefined;
  Read: {sura: number; aya?: number};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
