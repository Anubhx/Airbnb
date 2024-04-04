module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Ensure 'expo-router/babel' is removed as it's deprecated
      'react-native-reanimated/plugin', // Keeping React Native Reanimated plugin if you're using it
    ],
  };
};
