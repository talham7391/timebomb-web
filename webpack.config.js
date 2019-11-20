const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['babel-plugin-styled-components', '@babel/transform-runtime'],
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            pages: path.resolve(__dirname, './src/pages/'),
            client: path.resolve(__dirname, './src/client/'),
            utils: path.resolve(__dirname, './src/utils/'),
            store: path.resolve(__dirname, './src/store/'),
            components: path.resolve(__dirname, './src/components/'),
        },
    },
};