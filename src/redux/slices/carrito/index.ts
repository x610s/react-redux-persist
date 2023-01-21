import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductCart } from './../../../models/products';

export interface CarritoState {
    carroItem: ProductCart[]
}

export const initialState: CarritoState = {
    carroItem: []
};

const carritoSlice = createSlice({
    name: 'carrito',
    initialState,
    reducers: {
        setToCart: (state, action: PayloadAction<Product>) => {
            const item: ProductCart = state.carroItem.filter(x => x.product.id == action.payload.id)[0];
            if (item != null && item != undefined) {
                const index: number = state.carroItem.indexOf(item);
                state.carroItem[index].cantidad = item.cantidad + 1
            } else {
                state.carroItem = [...state.carroItem, { cantidad: 1, product: action.payload }];
            }
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            const item: ProductCart = state.carroItem.filter(x => x.product.id === action.payload.id)[0];
            if (item != null && item != undefined) {
                const index: number = state.carroItem.indexOf(item);
                console.log(index);
                if(index>-1){
                    state.carroItem = state.carroItem.filter(x=> x !== state.carroItem[index])
                }
            }
        }
    }
})

const nuevaCantidad = (id: number) => {
    const producto = initialState.carroItem.filter(x => x.product.id === id)[0];
    if (!producto) {
        return 1;
    }
    return producto.cantidad++
}

export const { setToCart,removeProduct } = carritoSlice.actions;
export default carritoSlice.reducer;