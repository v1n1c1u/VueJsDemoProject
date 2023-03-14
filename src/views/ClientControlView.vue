<template>
    <div class="container">
        <div class="row">
            <div class="class col-sm-12">
                <h2 class="page-title">Clients</h2>
            </div>  
        </div>
        <div class="row">
                <div class="col-sm-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Register Date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        <div class="row">
            <div class="col-sm-12">
                <FormButton type="button" value="Add Client" iconClass="fa fa-plus"></FormButton>
            </div>
        </div>
    </div>        
</template>
<script>
import FormButton from '@/components/buttons/FormButton.vue'

export default {
    name: 'ClientControlView',
    components:{
        FormButton
    }
}
</script>

<style scoped>
    
</style>