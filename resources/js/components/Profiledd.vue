<template>
    <div class="container">        


 <div id="people">
  <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
</div>

    </div>
</template>

<script>
    export default {
      data () {
            return {
        columns: ['id', 'name', 'age'],
        tableData: [
            { id: 1, name: "John", age: "20" },
            { id: 2, name: "Atkinson", age: "24" },
            { id: 3, name: "Leo", age: "16" },
            { id: 4, name: "Peo", age: "55" },
            { id: 5, name: "Yuuriococos", age: "40" }
        ],
        options: {
            // see the options API
        }
    } },

        mounted() {
            console.log('Component mounted.')
        }

        
    }
</script>


