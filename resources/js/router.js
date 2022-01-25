import Products from "./components/Products";
import ProductCreate from "./components/ProductCreate";
import ProductEdit from "./components/ProductEdit";

export const routes = [
    { name: "products", path: "/products", component: Products },
    {
        name: "product-edit",
        path: "/products/edit/:id",
        component: ProductEdit,
    },
    {
        name: "product-create",
        path: "/products/create",
        component: ProductCreate,
    },
];
