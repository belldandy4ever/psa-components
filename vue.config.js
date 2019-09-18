module.exports = {
    chainWebpack: (config) => {
      const svgRule = config.module.rule('svg');
  
      svgRule.uses.clear();
      svgRule
        .oneOf('inline')
        .resourceQuery(/\?inline/)
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .options({
            svgo: {
                plugins: [
                    {
                        cleanupIDs: false
                    }
                ]
            }
        })
        .end()
        .end()
        .oneOf('external')
        .use('file-loader')
        .loader('file-loader')
        .options({
            name: 'img/[name].[hash:8].[ext]',
        });
    },
  };