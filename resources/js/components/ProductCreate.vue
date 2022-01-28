<template>
    <div class="row">
        <div class="col-md-6">
            <h2>Product Create</h2>
            <form @submit.prevent="addNewProduct">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        v-model="product.name"
                    />
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input
                        type="number"
                        name="price"
                        class="form-control"
                        id="price"
                        placeholder="Enter price"
                        v-model="product.price"
                    />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        class="form-control"
                    ></textarea>
                </div>
                <button type="submit" class="btn btn-sm mt-2 btn-primary">
                    Create
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {},
        };
    },
    methods: {
        addNewProduct() {
            this.axios
                .post("/api/products", this.product)
                .then((response) => {
                    this.$router.push({ name: "products" });
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
