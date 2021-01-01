const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.(js|mdx|tsx)'],
    addons: ['@storybook/addon-essentials'],

    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [['react-app', { flow: false, typescript: true }]],
                    },
                },
                require.resolve('react-docgen-typescript-loader'),
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
