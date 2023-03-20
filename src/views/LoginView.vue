<template>
    <div class="login-div">
      <div class="login-box">
        <form>
            <h1>Login</h1>
            <span id="error-message">{{ errorMessage }}</span>
            <TextInput
              label="E-mail"
              v-model="user.email">
            </TextInput>
            <TextInput
              label="Password"
              type="password"
              v-model="user.password">
            </TextInput>
            <br>
            <Button
              type="button"
              value="Sign in"
              iconClass="fa fa-sign-in"
              :callback="signIn"
              >
            </Button>
        </form>
      </div>
    </div>
</template>
  
<script> 
  import TextInput from '@/components/inputs/TextInput.vue';
  import Button from '@/components/buttons/Button.vue';
  import User from '@/models/User';
  import userService from '@/api/user-service';

  export default {
    name: 'LoginView',
    components : {
      TextInput,
      Button
    },
    data(){
      return {
        user: new User(),
        errorMessage: ''
      }
    },
    methods: {
      signIn(){
        if(this.user.validModelForLogin()){
          this.errorMessage = "";
          if(userService.login(this.user.email, this.user.password)){
            this.$router.push({name:'About'});
          }else{
            this.errorMessage = "Incorrect e-mail or password!";
          }

          /*
          userService.login(this.user.email, this.user.password)
          .then(response => {
            console.log(response);
            this.$router.push({name:'About'});
          })
          .catch(error => {
            console.log(error);
          })
          */
          
          //this.$router.push({name:'About'});
        }else{
          this.errorMessage = "E-mail and password are required!";
        }
      }
    }
  }
</script>

<style scoped>
  .login-box {
    margin: auto;
    padding: 20px;
    width: 300px;
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    height: fit-content;
    border-radius: 10px 10px 10px 10px;
  }
  h1 {
    text-align: center;
    color: var(--primary-color);
    font-size:50px;
    font-weight:bold;
  }
  form {
    display: flex;
    flex-direction: column;
    min-height: 350px;
  }
  #error-message{
    color:rgb(243, 64, 64);
    text-align: center;
    font-style: italic;
    margin-top:5px;
    margin-bottom: 5px;
  }

</style>
  