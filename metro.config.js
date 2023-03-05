/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const {assetExts, sourceExts} = require('metro-config/src/defaults/defaults');
const blacklist = require('metro-config/src/defaults/exclusionList');

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    blacklistRE: blacklist([/ios\/build\/.*/])
  }
};
