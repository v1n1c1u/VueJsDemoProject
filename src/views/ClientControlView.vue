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
                            <th>Registration Date</th>
                        </tr>
                    </thead>
                </table>
                <EmptyMessage message="No clients to show..."></EmptyMessage>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <Button type="button" value="Add Client" iconClass="fa fa-plus"></Button>
            </div>
        </div>
    </div>        
</template>
<script>
import Button from '@/components/buttons/Button.vue'
import EmptyMessage from '@/components/tables/EmptyMessage.vue';

export default {
    name: 'ClientControlView',
    components:{
        Button,
        EmptyMessage
    },
    data(){
        return {};
    },
    methods:{
        findAllClients(){
            console.log("I was called");
        }
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
</style>