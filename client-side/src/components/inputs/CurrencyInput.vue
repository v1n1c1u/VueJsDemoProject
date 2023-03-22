<template>
    <input
      ref="inputRef"
      type="text"
    />
  </template>
  
  <script>
  import { useCurrencyInput } from 'vue-currency-input'
  
  export default {
    name: 'CurrencyInput',
    props: {
      value: Number, // Vue 2: value
      options: Object
    },
    setup(props) {
      const { inputRef } = useCurrencyInput(props.options)
  
      return { inputRef }
    }
  }
  </script>
  <style scoped>
    input {
        border: 1px solid #ddd;
        border-radius: 2px 2px 2px 2px;
        outline: none;
        box-shadow: none;
    }
    input:focus{
        border-color:var(--primary-color);
    }
</style>