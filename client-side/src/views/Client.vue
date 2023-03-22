<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="page-title"> {{editMode ? "Edit ":"Add "}}Client</h2>
                <hr>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="id">Code</label>
                    <input type="text" v-model="client.id" class="form-control" id="id" disabled>
                </div>
            </div>
            <div class="col-sm-10">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model="client.name" class="form-control" id="name">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="text" v-model="client.email" class="form-control" id="email" value="">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" v-model="client.phone" v-mask="'(##) #####-####'" class="form-control" id="phone">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label for="date">Registration date</label>
                    <input type="date" v-model="client.registrationDate" class="form-control" id="date">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12" id="save-button-siv">
                <hr>
                <Button id="save-button" value="Save" iconClass="fa fa-check" :callback="saveClient"></Button>
            </div>
        </div>
    </div>
</template>
<script>
import Button from '@/components/buttons/Button.vue';
import Client from '@/models/Client.js';
import clientService from '@/api/client-service';
import dateConverter from '@/utils/dateConverter';

export default {
    name: 'NewClient',
    data(){
        return {
            client: new Client(),
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
            clientService.findById(id)
            .then(response => {
                this.client = new Client(response.data);
            })
            .catch(error =>{
                console.log(error);
            });
        }
    },
    methods:{
        saveClient(){
            (this.editMode) ? this.updateClient() : this.registerClient();
        },
        updateClient(){
            if(this.client.validModelForUpdating()){
                clientService.update(this.client)
                .then(response => {
                    this.$swal({
                        icon: 'success',
                        title: 'Success!',
                        text: "Client was edited!"
                    });
                    console.log(response);
                })
                .catch(error => console.log(error));
            }else{
                this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Client name and id are required!"
                });
            }
        },
        registerClient(){
            if(this.client.validModel()){
                this.client.registrationDate = dateConverter.applyISOMask(this.client.registrationDate);
                clientService.register(this.client)
                .then(response => {
                    this.$swal({
                        icon: 'success',
                        title: 'Success!',
                        text: "Client was registered!"
                    });
                    console.log(response);
                })
                .catch(error => console.log(error))
            }else{
                this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Client name and email are required!"
                });
            }
        }
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