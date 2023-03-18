<template>
    <nav id="menu">
      <div id="page-links-div">
        <div id="logo-div"><img id="menu-logo" src="@/assets/logo.png"/></div>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/clients">Clients</router-link>
        <router-link to="/about">About</router-link>

      </div>
      <div id="logout-div">
        <router-link id="logout-link" to="/login">
            <div>
                <i class="fa fa-sign-out"></i>
                Logout
            </div>
        </router-link>
      </div>
    </nav>
</template>
<style scoped>
    #menu, #page-links-div, #logout-div {
        padding:  0 30px 0 10px;
        height: 60px;
        overflow: hidden;
        background-color: #2c3e50;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    a, #logo-div, #logout-div {
        font-weight: bold;
        color: #42b983;
        text-decoration: none;
        width:100px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    a:hover{
        background-color: #3e5266;
    }

    #logout-div{
        padding: 0;
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
        background-color: inherit;
    }
</style>
<script>
export default {
    name: 'MenuComponent'
}
</script>