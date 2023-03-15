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
                                <th>Quantity in Stock</th>
                                <th>Registration Date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        <div class="row">
            <div class="col-sm-12">
                <Button type="button" value="Add Product" iconClass="fa fa-plus"></Button>
            </div>
        </div>
    </div>    
</template>
<script>
import Button from '@/components/buttons/Button.vue'
import productService from '@/api/product-service';
import Product from '@/models/Product';

export default {
    name: 'ProductControlView',
    components:{
        Button
    },
    data(){
        return {
            products: []
        };
    },
    methods:{
        findAllProducts(){
            productService.findAll()
            .then(response => {
                console.log(response);
                this.products = response.data.map(p => new Product(p));
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    beforeCreate(){

    },
    mounted(){
        this.findAllProducts();
    }
}
</script>

<style scoped>

</style>