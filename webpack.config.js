const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./scss/style.scss'],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'css/[name].min.css',
                    }
                },
                {
                    loader: 'extract-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }, ],
    },
};