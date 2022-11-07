<template>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="8" sm="8">
            <h2>Practice</h2>
            <div class="mb-4">
                <ul class="mt-4 pl-4">
                    <li>Two page layouts</li>
                    <li>Customized error page</li>
                    <li>Component</li>
                    <li>Charts</li>
                </ul>
            </div>

          </v-col>
          <v-col cols="12" md="4" sm="4">
            <div class="mb-4">
                <h3>Project Environment</h3>
                <ul class="mt-4 pl-4">
                    <li>NodeJS</li>
                </ul>
            </div>
            <div class="mb-4">
                <h3>JS Library</h3>
                <ul class="mt-4 pl-4">
                    <li>VueJS</li>
                </ul>
            </div>                    

            <div class="mb-4">
                <h3>Framework & Plugins</h3>
                <ul class="mt-4 pl-4">
                    <li>NextJS</li>
                    <li>Vuetify</li>
                    <li>ChartJS</li>
                </ul>
            </div>

            <div class="mb-4">
                <p>More details in readme.txt</p>
            </div>

          </v-col>
          
          
        </v-row>
      </v-container>
    </v-main>
  </template>
  <script>
  export default {
    layout: "dashboard",
    data: () => ({}),
  };
  </script>