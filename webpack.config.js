module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                },
            ],
        },
    };
};