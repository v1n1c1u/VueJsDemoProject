<template>
    <div id="empty-table-message">
        <span><i class="fa fa-frown-o" aria-hidden="true"></i>&nbsp;{{message}}</span>
    </div>
</template>
<script>

export default {
    name: 'EmptyMessage',
    props: {
        message: {type: String, require: false, default: 'Nothing to show...'},
    }
}
</script>
<style scoped>
#empty-table-message{
    background-color: whitesmoke;
    height: 200px;
    padding: auto;
    color:gray;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width:100%;
}
span{
    display: flex;
    justify-content: center;
}
i {
    font-size: 50px;
}
</style>
