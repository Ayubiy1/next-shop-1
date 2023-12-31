import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  filter: string;
  filterBrand: string;
  filterFeature: string;
  search: string;
  sliceData: number;
  productID: number;
  product: Record<string, any>;
  products: any;
  orders: any;
}

const initialState: CounterState = {
  value: 0,
  filter: "All",
  filterBrand: "All",
  filterFeature: "All",
  search: "",
  sliceData: 10,
  productID: 1,
  product: {},
  // JSON.parse(localStorage.getItem("products-all") || '[]');
  // products: JSON.parse(localStorage.getItem("products-all") || "[]"),
  products: [],
  // orders: JSON.parse(localStorage.getItem("orders-all") || `[]`),
  orders: [],
};

// if (typeof window !== "undefined") {
//   initialState.products = JSON.parse(
//     localStorage.getItem("products-all") || "[]"
//   );
//   initialState.orders = JSON.parse(localStorage.getItem("orders-all") || "[]");
// }

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setFilterBrand: (state, action: PayloadAction<string>) => {
      state.filterBrand = action.payload;
    },
    setFilterFeature: (state, action: PayloadAction<string>) => {
      state.filterFeature = action.payload;
    },
    serSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setProducts: (state, action: PayloadAction<Object>) => {
      state.product = action.payload;
      console.log(state.product);
      // localStorage.setItem("product", JSON.stringify(action.payload));
    },
    setProductsAll: (state, action: PayloadAction<Record<string, any>>) => {
      state.products = action.payload;
      // localStorage.setItem("products-all", JSON.stringify(state.products));
    },
    setOrders: (state, action: PayloadAction<Record<string, any>>) => {
      state.orders.push(action.payload);
      // localStorage.setItem("orders-all", JSON.stringify(state.orders));
    },
    setRemoveOrder: (state, action: PayloadAction<number>) => {
      console.log(
        (state.orders = state.orders.filter(
          (o: Record<string, any>) => o.id !== action.payload
        ))
      );

      state.orders ==
        state.orders.filter(
          (o: Record<string, any>) => o.id !== action.payload
        );
      // localStorage.setItem("orders-all", JSON.stringify(state.orders));
    },
  },
});

export const {
  setFilter,
  setFilterBrand,
  setFilterFeature,
  serSearch,
  setProducts,
  setProductsAll,
  setOrders,
  setRemoveOrder,
} = counterSlice.actions;

export default counterSlice.reducer;
