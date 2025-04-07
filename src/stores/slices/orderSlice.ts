import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface OrderItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
interface OrderState {
  items: OrderItem[];
}

const initialState: OrderState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<OrderItem>) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },


    removeFromOrder: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearOrder: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
      const product = state.items.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToOrder, removeFromOrder, clearOrder, updateQuantity } = orderSlice.actions;
export default orderSlice.reducer;
