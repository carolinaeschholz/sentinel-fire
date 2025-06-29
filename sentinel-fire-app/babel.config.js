module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            "@components": "./components",
            "@screens": "./screens",
            "@context": "./context",
            "@services": "./services",
            "@constants": "./constants",
            "@utils": "./utils"
          }
        }
      ]
    ],
  };
};

