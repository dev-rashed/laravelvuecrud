<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/products" class="nav-link"
                        >Products</router-link
                    >
                    <router-link to="/products/create" class="nav-link"
                        >Create</router-link
                    >
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>
