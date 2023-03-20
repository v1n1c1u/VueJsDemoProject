<template>
    <div>
        <label for="">{{ label }}</label>
        <br>
        <input 
            :type="type" 
            :placeholder="placeHolder" 
            v-model="valueChange"/>
    </div>
</template>
<script>

export default {
    name:"TextInput",
    props: {
        label: {type: String, require},
        type: {type:String,default: 'text'},
        placeHolder: {type:String, default: '', require: false},
        value: {type: String, default: ''}
    },
    model:{
        prop: "value",
        event: 'onChange'
    },
    watch:{
        valueChange(){
            this.$emit('onChange', this.valueChange);
        }
    },
    data(){
        return {
            valueChange: this.value
        }
    }
}
</script>
<style scoped>
    input {
        padding: 12px 20px;
        margin: 8px 0px;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 2px 2px 2px 2px;
        outline: none;
    }
    input:focus{
        border-color:var(--primary-color);
    }
</style>
