<template>
  
  <v-main>
    <v-container fluid fill-height>

      <v-row class="text-center pt-12">
        <v-col cols="12">
          
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" class="loginForm">
          <p class="text-h3">Charts</p>
          <p class="my-12 text-body">Present data with charts. Give your audiance a clear picture with interactive UI.</p>

          <NuxtLink to="/chart">Explore here</NuxtLink>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="text-h5">
              Ignore the error?
            </v-card-title>

            <v-card-text>
              Ignore current error to view dashboard?
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog = false">
                Stay Here
              </v-btn>

              <v-btn color="green darken-1" text @click="goDashboard()">
                View Dashboard
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-row>

    </v-container>
  </v-main>


</template>
<script>
// import axios from 'axios'
export default {

  data: () => ({
    dialog: false,
    show1: false,
    valid: true,
    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    loginError: '',
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.authLogin();
      }
    },
    authLogin() {
      // console.log('start auth');
      this.$axios.$post('http://127.0.0.1:8000/api/auth/investor-account', {
        email: this.username,
        password: this.password,
      }).then(response => {
        // console.log(response.data);

        if (response.status >= 200 && response.status < 300 && response.data.authLogin) {
          // console.log('message: '+response.data.message)
          this.loginError = "";
          this.$router.push('/dashboard');
        } else {
          this.loginError = response.data.loginError;
          // console.log('error: '+ this.loginError);
        }
      }).catch(err => {
        // console.log(err);
        this.loginError = "Authantication failed, Please try again later";
        setTimeout(()=>{
          this.dialog = true;
        },3000)
        
      });
    },
    goDashboard(){
      this.$router.push('/dashboard');
    }

  },
  components: {}
}
</script>

<style lang="scss" scoped>
.v-main {
  // background: url('https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg') no-repeat center center fixed !important;
  background: url('./../assets/images/close-up-businessman-with-digital-tablet.jpg') no-repeat center center fixed !important;
  background-size: cover;
}
.loginForm{
  background: rgba(255, 255, 255, .9);
    border-radius: 5px;
    padding: 30px;
}
</style>