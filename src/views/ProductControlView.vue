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
                    <tbody v-if="products.length>0">
                        <tr v-for="product in products" :key="product.id">
                            <td class="centered-content">{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td class="centered-content">{{product.price | currencyFilter}}</td>
                            <td class="centered-content">{{product.quantityInStock}}</td>
                            <td class="centered-content">{{ product.registrationDate | dateFilter }}</td>
                            <td class="centered-content">
                                <div id="actions-options-div">
                                    <button class="invisible-button">
                                        <i @click="editProduct(product)" class="fa fa-edit" title="Edit product"></i>
                                    </button>
                                    <button class="invisible-button">
                                        <i @click="showConfirmDialog(product)" class="fa fa-trash" title="Delete product"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <EmptyMessage message="No products to show..." v-if="products.length==0"></EmptyMessage>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <Button 
                    type="button" 
                    value="Add Product" 
                    iconClass="fa fa-plus"
                    :callback="addProduct"
                    >
                </Button>
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
            return currencyConverter.applyDollarMaskWithPrefix(price);
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
                this.products = response.data.map(p => new Product(p));
            })
            .catch(error => {
                console.log(error);
            });
        },
        editProduct(product){
            this.$router.push({name:"EditProduct", params: {id:product.id}});
        },
        deleteProduct(product){
            productService.deleteById(product)
            .then(response => {
                let index = this.products.findIndex(p => p.id == product.id);
                this.products.splice(index,1)
                console.log(response);
                this.$swal.fire({
                    icon: 'success',
                    title: `Success!`,
                    text: 'Product deleted successfully!',
                    animate: true
                });
            })
            .catch(error =>{
                this.$swal.fire({
                    icon: 'error',
                    title: `Oops!`,
                    text: 'Unable to delete product!',
                    animate: true
                });
                console.log(error);
            });
        },
        addProduct(){
            this.$router.push({name:"NewProduct"});
        },
        showConfirmDialog(product){
            this.$swal.fire({
                icon: 'warning',
                title:'Caution!',
                text: `Do you really want to delete "${product.name}"?`,
                animate: true,
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteProduct(product);
                }
            })
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
    .centered-content, th{
        text-align: center;
    }
    #actions-options-div{
        display: flex;
        width:100%;
        justify-content: space-evenly;
    }
    #actions-options-div i{
        color:var(--secondary-color);
    }
    #actions-options-div i:hover {
        color:var(--primary-color);
    }

    .invisible-button{
        border-style: none;
        background-color:inherit
    }
    .my-actions { 
        margin: 0 2em;
        width:100%;
    }
    .order-1 { order: 1; }
    .order-2 { order: 2; }
    .right-gap {
        margin-right: auto;
    }
</style>