module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        const [arg] = args
        arg.title = 'KepoBro News'

        return args
      })
  },
  pwa: {
    name: 'KepoBro News',
    themeColor: '#363636',
    manifestOptions: {
      background_color: '#f5f5f5',
      description: 'Dapatkan informasi terbaru mengenai Liga Primer Inggris',
      short_name: 'KB News',
      gcm_sender_id: '182827689329'
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
}
