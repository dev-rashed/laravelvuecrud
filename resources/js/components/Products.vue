<template>
    <div>
        <h1>Products</h1>
        <hr />
        <b-table :items="products" :fields="fields" striped hover></b-table>
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
};
</script>
