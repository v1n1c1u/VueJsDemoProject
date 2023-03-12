<template>
    <div class="dashboard">
        <h1>{{pageTitle}}</h1>
    </div>    
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    name: 'DashboardView',
    data(){
        return {
            pageTitle: "Dashboard view"
        }
    }
}
</script>

<style scoped>

</style>
