<template>
    <div>
       <button
            :type=type
            @click="callback"
            >
            <i :class=iconClass></i>
            {{ value }}
        </button>
    </div>
</template>
<script>

export default {
    name:"ButtonComponent",
    props: {
        value: {type: String, require},
        type: {type:String, default: 'button'},
        callback: {type:Function, default: () => {}},
        iconClass: {type:String, require:false, default:""}
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    button {
        padding: 10px 20px;
        border: 1px solid #ddd;
        border-radius: 2px 2px 2px 2px;
        border-radius: 5px 5px 5px 5px;
        background-color: var(--primary-color);
        color: white;
        font-size: large;
        font-weight: bold;
        width:100%;
        cursor: pointer;
    }
    button:hover{
        background-color: #5bbe92;
    }
</style>