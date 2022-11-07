// nuxt.config.js
export default{
    components: true,
    css : [
        '@mdi/font/css/materialdesignicons.min.css'
     ],
    buildModules: [
      '@nuxtjs/vuetify',
      ['@nuxtjs/vuetify', { iconfont: 'mdi' }]
    ],
    modules: ['@nuxtjs/axios'],
    axios: {
      // baseURL: 'http://localhost:4000',
    },
    plugins: [
      {src: '~/plugins/chart.js', mode: 'client'}
    ],
  }

