<template>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 class="text-center">
            <h1 v-if="error.statusCode === 404">Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <NuxtLink to="/chart">Back to Charts page</NuxtLink>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </template>
    
  <script>
  export default {
    props: ["error"],
  };
  </script>