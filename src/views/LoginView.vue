<template>
    <div class="login-div">
      <div class="login-box">
        <form>
            <h1>Login</h1>
            <span>{{ errorMessage }}</span>
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
        if(this.user.validModelForLogin){
          this.errorMessage = "";
          userService.login(this.user.email, this.user.password)
          .then(response => {
            console.log(response);
            this.$router.push({name:'Dashboard'});
          })
          .catch(error => {
            console.log(error);
          })
        }else{
          this.errorMessage = "Email and password are required!";
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
    height: 350px;
  }

</style>
  