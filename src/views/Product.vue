<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="page-title"> {{editMode ? "Edit ":"Add "}}product</h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="id">Code</label>
                    <input type="text" v-model="product.id" class="form-control" id="id" disabled>
                </div>
            </div>
            <div class="col-sm-10">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="product.name" class="form-control" id="name">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" v-model="product.price" class="form-control" id="price" placeholder="Ex.: 000.000,00" value="">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" v-model="product.quantityInStock" class="form-control" id="quantity">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="date">Registration date</label>
                    <input type="date" v-model="product.registrationDate" class="form-control" id="date">
                </div>
            </div>
            <div class="col-sm-12">
                <div class="form-group">
                    <label for="details">Details</label>
                    <textarea v-model="product.details" class="form-control" id="details" rows="4"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12" id="save-button-siv">
                <hr>
                <Button id="save-button" value="Save" iconClass="fa fa-check" :callback="saveProduct"></Button>
            </div>
        </div>
    </div>
</template>
<script>
import Button from '@/components/buttons/Button.vue';
import Product from '@/models/Product';
import productService from '@/api/product-service';
import dateConverter from '@/utils/dateConverter';

export default {
    name: 'NewProduct',
    data(){
        return {
            product: new Product(),
            editMode: false
        }
    },
    components:{
        Button
    },
    mounted(){
        let id = this.$route.params.id;
        if(id){
            this.editMode = true;
            productService.findById(id)
            .then(response => {
                this.product = new Product(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
        }
    },
    methods:{
        saveProduct(){
            (this.editMode) ? this.updateProduct() : this.registerProduct();
        },
        updateProduct(){
            if(this.product.validModelForUpdating()){
                productService.update(this.product)
                .then(response => {
                    this.$swal({
                        icon: 'success',
                        title: 'Success!',
                        text: "Product was edited!"
                    });
                    console.log(response);
                })
                .catch(error => console.log(error));
            }else{
                this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Product name and id are required!"
                });
            }
        },
        registerProduct(){
            if(this.product.validModel()){
                this.product.registrationDate = dateConverter.applyISOMask(this.product.registrationDate);
                productService.register(this.product)
                .then(response => {
                    this.$swal({
                        icon: 'success',
                        title: 'Success!',
                        text: "Product was registered!"
                    });
                    console.log(response);
                })
                .catch(error => console.log(error))
            }else{
                this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Product name and price are required!"
                });
            }
        }
    }
}
</script>
<style scoped>
    input:focus{
        box-shadow: 1px 0px 5px var(--primary-color) ;
    }
    #save-button-div{
        display: flex;
        flex-direction: column-reverse;
    }
    #save-button{
        width: fit-content;
        float: right;
    }
    textarea {
        resize: none;
    }
</style>