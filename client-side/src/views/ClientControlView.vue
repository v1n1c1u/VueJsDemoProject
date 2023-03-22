<template>
    <div class="container">
        <div class="row">
            <div class="class col-sm-12">
                <h2 class="page-title">Clients</h2>
            </div>  
        </div>
        <div class="row" id="client-table-row">
            <div class="col-sm-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Phone</th>
                            <th>Registration Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody v-if="clients.length>0">
                        <tr v-for="client in clients" :key="client.id">
                            <td class="centered-content">{{client.id}}</td>
                            <td>{{client.name}}</td>
                            <td class="centered-content">{{client.email}}</td>
                            <td class="centered-content">{{client.phone}}</td>
                            <td class="centered-content">{{ client.registrationDate | dateFilter }}</td>
                            <td class="centered-content">
                                <div id="actions-options-div">
                                    <button class="invisible-button">
                                        <i @click="editClient(client)" class="fa fa-edit" title="Edit client"></i>
                                    </button>
                                    <button class="invisible-button">
                                        <i @click="showConfirmDialog(client)" class="fa fa-trash" title="Delete client"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <EmptyMessage message="No clients to show..." v-if="clients.length==0"></EmptyMessage>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <Button 
                    type="button" 
                    value="Add Client" 
                    iconClass="fa fa-plus" 
                    :callback="addClient">
                </Button>
            </div>
        </div>
    </div>        
</template>
<script>
import Button from '@/components/buttons/Button.vue';
import EmptyMessage from '@/components/tables/EmptyMessage.vue';
import dateConverter from '../utils/dateConverter.js';
import clientService from '@/api/client-service.js';
import Client from '@/models/Client.js';


export default {
    name: 'ClientControlView',
    components:{
        Button,
        EmptyMessage
    },
    data(){
        return {
            clients: []
        };
    },
    filters:{
        dateFilter(date){
            return dateConverter.applyISOMask(date);
        }
    },
    methods:{
        findAllClients(){
            clientService.findAll()
            .then(response => {
                this.clients = response.data.map(p => new Client(p));
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        editClient(client){
            this.$router.push({name:"EditClient", params: {id:client.id}});
        },
        deleteClient(client){
            clientService.deleteById(client)
            .then(response => {
                let index = this.clients.findIndex(p => p.id == client.id);
                this.clients.splice(index,1)
                console.log(response);
                this.$swal.fire({
                    icon: 'success',
                    title: `Success!`,
                    text: 'client deleted successfully!',
                    animate: true
                });
            })
            .catch(error =>{
                this.$swal.fire({
                    icon: 'error',
                    title: `Oops!`,
                    text: 'Unable to delete client!',
                    animate: true
                });
                console.log(error);
            });
        },
        addClient(){
            this.$router.push({name:"NewClient"});
        },
        showConfirmDialog(client){
            this.$swal.fire({
                icon: 'warning',
                title:'Caution!',
                text: `Do you really want to delete "${client.name}"? It cannot be undone!`,
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
                    this.deleteclient(client);
                }
            })
        }
    },
    beforeCreate(){

    },
    mounted(){
        this.findAllClients();
    }
}
</script>

<style scoped>
    .table{
        margin-bottom: 0;
    }
    #client-table-row{
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
</style>