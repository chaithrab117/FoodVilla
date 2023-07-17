import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
   name: "cart",
   initialState:{
    items:[]
   },
   reducers:{
    addTocart:(state,data)=>{state.items.push(data.payload)},
    clearCart:(state)=>{state.items=[]},
    updateItemQty:(state,data)=>{
      state.items.map(obj=>{
         if(obj.id==data.payload.itemObj.id){
            data.payload.operation=="inc"?(obj.qty++):(obj.qty--);
         }
      })
    },
    removeItem:(state,data)=>{
      state.items=state.items.filter(obj=>{
       return obj.id!=data.payload.id
      });
    }
   }
});

// CartSlice  =>  {actions,reducer}
export default CartSlice.reducer;
export const {addTocart,clearCart,updateItemQty,removeItem}=CartSlice.actions;