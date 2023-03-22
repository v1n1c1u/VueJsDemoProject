<template>
  <div class="container">
        <div class="row">
            <div class="class col-sm-12">
                <h2 class="page-title">About</h2>
                <hr>
                <div  id="greeting">
                    &#128075; Hello there!
                </div>
                <p>
                    This website is a demonstration of my frontend web development
                    skills with Vue. It simulates a small company's system
                    for controlling clients and products.
                    <br><br>
                    Give it a try!
                </p>
            </div>
        </div>
    </div>       
</template>
<style scoped>
    #greeting{
        font-size:70px;
        font-weight: bold;
        text-align: center;
        width: 100%;
        color: var(--primary-color)
    }
    p {
        margin-top:50px;
        padding: 0 70px 0 70px;
        font-size: 30px;
        text-align: justify;
    }
</style>
