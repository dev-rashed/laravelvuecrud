<template>
    <div>
        <h1>Products</h1>
        <hr />
        <b-table :items="products" :fields="fields" striped hover>
            <template #cell(actions)="row">
                <div class="btn-group">
                    <button class="btn btn-primary btn-sm">Edit</button>
                    <button
                        @click="deleteProducct(row.item.id)"
                        class="btn btn-danger btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            fields: [
                { key: "id", label: "ID" },
                { key: "name", label: "Name" },
                { key: "price", label: "Price" },
                { key: "actions", label: "Actions", sortable: false },
            ],
        };
    },
    created() {
        this.axios.get("/api/products").then((response) => {
            this.products = response.data;
        });
    },
    methods: {
        deleteProducct(id) {
            this.axios.delete("/api/products/" + id).then((response) => {
                this.products = this.products.filter(
                    (product) => product.id !== id
                );
            });
        },
    },
};
</script>
