// customize the config as-is:
const { createConfig } = require('eslint-config-galex/src/createConfig');

const {
  createTSOverride,
} = require('eslint-config-galex/src/overrides/typescript');

const override = createTSOverride({
  react: {
    hasReact: true,
    version: 'detect',
    isCreateReactApp: false,
  },
  typescript: {
    hasTypeScript: true,
    version: '4.0.5',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-default-export': 'off',
    'sort-keys-fix/sort-keys-fix': 'off',
  },
});

module.exports = createConfig({
  overrides: [override],
});
