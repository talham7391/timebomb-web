
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
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};