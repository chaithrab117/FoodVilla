import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";

const Store=configureStore({
    reducer:{
       cart:CartSlice
    }
});

export default Store;