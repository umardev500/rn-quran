export type SuraData = {
  index: number; // Index of the chapter
  start: number; // Starting verse (offset within Quran's verses)
  ayas: number; // Number of verses in the chapter
  order: number; // Order of revelation
  rukus: number; // Number of sections in the chapter
  name: string; // Arabic name of the chapter
  tname: string; // Transliteration of the Arabic name
  ename: string; // English name
  type: 'Meccan' | 'Medinan'; // Type of revelation
};
