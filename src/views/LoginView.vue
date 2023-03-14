<template>
    <div class="login-div">
      <div class="login-box">
        <form>
            <h1>Login</h1>
            <TextInput
              label="E-mail">
            </TextInput>
            <TextInput
              label="Password"
              type="password">
            </TextInput>
            <br>
            <FormButton
              type="button"
              value="Sign in"
              iconClass="fa fa-sign-in"
              :callback="signIn"
              >
            </FormButton>
        </form>
      </div>
    </div>
</template>
  
<script> 
  import TextInput from '@/components/inputs/TextInput.vue';
  import FormButton from '@/components/buttons/FormButton.vue';
  export default {
    name: 'LoginView',
    components : {
      TextInput,
      FormButton
    },
    methods: {
      signIn(){
        this.$router.push({name:'Dashboard'});
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
  }
  form {
    display: flex;
    flex-direction: column;
    height: 350px;
  }

</style>
  