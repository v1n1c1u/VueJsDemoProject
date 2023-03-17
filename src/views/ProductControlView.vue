<template>
    <div class="container">
        <div class="row">
            <div class="class col-sm-12">
                <h2 class="page-title">Products</h2>
            </div>  
        </div>
        <div class="row" id="product-table-row">
            <div class="col-sm-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity in Stock</th>
                            <th>Registration Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody v-if="products.length==0">
                        <tr v-for="product in products" :key="product.id">
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.price | currencyFilter}}</td>
                            <td>{{product.quantityInStock}}</td>
                            <td>{{ product.registrationDate | dateFilter }}</td>
                            <td>Edit / Delete</td>
                        </tr>
                    </tbody>
                </table>
                <EmptyMessage message="No products to show..." v-if="products.length==0"></EmptyMessage>
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
import EmptyMessage from '@/components/tables/EmptyMessage.vue';
import productService from '@/api/product-service';
import Product from '@/models/Product';
import dateConverter from '../utils/dateConverter.js'
import currencyConverter from '../utils/currencyConverter.js'

export default {
    name: 'ProductControlView',
    components:{
        Button,
        EmptyMessage

    },
    filters:{
        dateFilter(date){
            return dateConverter.applyISOMask(date);
        },
        currencyFilter(price){
            return currencyConverter.applyDollarMask(price);
        }
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
    .table{
        margin-bottom: 0;
    }
    #product-table-row{
        margin-bottom: 10px;
    }
</style>