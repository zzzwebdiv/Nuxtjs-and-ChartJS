<template>
    <div>
      <v-app-bar
        class="white--text"
          color="primary"
      >
        <v-toolbar-title class="text-h6 text-uppercase" @click="()=>this.$router.push('/')">NuxtJS + ChartJS</v-toolbar-title>
  
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
    
          <v-btn text active-class="active" to="/chart" class="white--text" >Charts</v-btn>
          <v-btn text class="ml-2 white--text" active-class="active" to="/about">About</v-btn>
          <!-- <v-btn text class="ml-2" active-class="active" to="/logout">Logout</v-btn> -->
        </v-toolbar-items>
        
        <div class="hidden-md-and-up">
          <v-menu offset-y nudge-left tile min-width="100%" transition="slide-y-transition">
            <template 
              
              v-slot:activator="{ on, attrs }"
              >
              <v-icon v-bind="attrs" v-on="on" class="pv-4">mdi-menu</v-icon>
            </template>
            <v-list class="pa-0 d-flex flex-column">
              <v-list-item class="pa-0"><v-btn tile width="100%" text active-class="active" to="/chart" >Charts</v-btn></v-list-item>
              <v-list-item class="pa-0"><v-btn tile width="100%" text active-class="active" to="/about">About</v-btn></v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
    </div>
  </template>
  
  <script>
  export default {
      
  }
  </script>
  
  <style lang="scss" scoped>
  .blue-bg,.v-menu__content .v-list-item:hover,.v-list-item a.active{
    // background-color: var(--v-primary-base) !important;
    // color:aliceblue !important;
  }
  .v-toolbar__title{
    cursor:pointer !important
  }
  .v-menu__content{
    top:56px !important;
  }
  .v-menu__content .v-btn:not(.v-btn--round).v-size--default{
    height: 48px !important;
  }
//   .v-menu__content .v-list-item:hover a{color:aliceblue !important;}
  </style>