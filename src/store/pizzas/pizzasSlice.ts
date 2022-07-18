import { createSlice } from "@reduxjs/toolkit"
import { fetchPizzas } from "./pizzaAsyncThunk"
import { PizzasState } from "./types"

const initialState: PizzasState = {
    pizzas: [],
    loading: 'off',
    error: null,
    count: 0
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.loading = 'on';
            state.pizzas = [];
            state.error = null;
            state.count = 0
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.loading = 'off';
            state.pizzas = action.payload.items;
            state.error = null;
            state.count = action.payload.count
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.loading = 'off';
            state.pizzas = [];
            state.count = 0
            if (action.payload) {
                state.error = action.payload.message
            } else {
                state.error = action.error.message
            }
        })
    }
})

export default pizzasSlice.reducer