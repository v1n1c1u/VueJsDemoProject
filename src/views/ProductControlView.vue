<template>
    <div class="container">
        <div class="row">
            <div class="class col-sm-12">
                <h2 class="page-title">Products</h2>
            </div>  
        </div>
        <div class="row">
                <div class="col-sm-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Register Date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        <div class="row">
            <div class="col-sm-12">
                <FormButton type="button" value="Add Product" iconClass="fa fa-plus"></FormButton>
            </div>
        </div>
    </div>    
</template>
<script>
import FormButton from '@/components/buttons/FormButton.vue'

export default {
    name: 'ProductControlView',
    components:{
        FormButton
    }
}
</script>

<style scoped>

</style>