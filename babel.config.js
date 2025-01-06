module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@typed': './src/types',
          '@data': './src/data',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
