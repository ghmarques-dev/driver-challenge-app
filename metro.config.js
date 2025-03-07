const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config')
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

const config = mergeConfig(defaultConfig, {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'png'],
  },
})

module.exports = wrapWithReanimatedMetroConfig(config)
