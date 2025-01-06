const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

const nativeWindConfig = withNativeWind(config, { input: './src/global.css', inlineRem: 16 });

module.exports = wrapWithReanimatedMetroConfig(nativeWindConfig);
