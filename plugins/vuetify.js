import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import 'vuetify/dist/vuetify.js.map'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

// const opts = {}

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#00bcd4',
                accent: '#4caf50',
                error: '#f44336',
                warning: '#ff9800',
                info: '#03a9f4',
                success: '#8bc34a',
                light:'#ffffff',
                gray:'#444444',
            },
        },
        options: { customProperties: true },
    },
})