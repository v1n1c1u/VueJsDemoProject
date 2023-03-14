<template>
    <nav id="menu">
      <div id="logo-div"><img id="menu-logo" src="@/assets/logo.png"/></div>
      <router-link to="/">Dashboard</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/clients">Clients</router-link>
      <router-link id="logout-link" to="/login">Logout</router-link>
    </nav>
</template>
<style scoped>
    #menu {
        padding:  0 30px 0 10px;
        height: 60px;
        overflow: hidden;
        background-color: #2c3e50;
        display: flex;

    }

    #menu a, #logo-div {
        font-weight: bold;
        color: #42b983;
        text-decoration: none;
        padding: 0px 10px 0px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    #menu a:hover{
        background-color: #3e5266;
    }
    #logout-link{
        justify-self: end;
        float:right;
    }

    #menu a.router-link-exact-active {
        background-color: #4e6275;
        color:#73d1a7;
    }
    #menu-logo{
        width: 30px;
        height: 40px;
        margin-right: 30px;
    }
    #logo-link:hover{
        background-color: #2c3e50;
    }
</style>
<script>
export default {
    name: 'MenuComponent'
}
</script>