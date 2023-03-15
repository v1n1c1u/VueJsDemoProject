<template>
    <footer id="footer">
        <div id="copyright-div">
            <span>&#169; Vinícius Souza</span>
            <ul>
				<li>
                    <a href="https://github.com/v1n1c1u" target="_blank"><i class="fa fa-github"></i></a>
                </li>
				<li>
                    <a href="https://www.linkedin.com/in/vin%C3%ADcius-souza-a108a6201/" target="_blank"><i class="fa fa-linkedin"></i></a>
                </li>
			</ul>
        </div>
    </footer>
</template>
<style scoped>
    footer {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        padding-top:5px;
        height: 60px;
        background-color: whitesmoke;
        width: 100%;
        color: gray;
        border-top-style: solid;
        border-top-color:rgb(230, 230, 230);
        border-top-width: 1px;
    }

    footer a {
        font-size: 25px;
        color: gray;
        text-decoration: none;
        padding: 0px 10px 0px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    footer a:hover{
        color: #42b983;
    }
    #copyright-div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 0;
        margin:0;
    }
</style>
<script>
export default {
    name: 'FooterComponent'
}
</script>