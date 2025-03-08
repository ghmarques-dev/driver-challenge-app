console.log('Metro config is being loaded')

const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config')
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')

const defaultConfig = getDefaultConfig(__dirname)

const config = mergeConfig(defaultConfig, {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'png'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})


module.exports = wrapWithReanimatedMetroConfig(config)
