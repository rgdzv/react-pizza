import { createSlice } from "@reduxjs/toolkit"
import { fetchPizzas } from "./pizzaAsyncThunk"
import { PizzasState } from "./types"

const initialState: PizzasState = {
    pizzas: null,
    loading: false,
    error: null,
    count: 0
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.count = 0
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload.items;
            state.error = null;
            state.count = action.payload.count;
            state.loading = false
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.pizzas = null;
            state.count = 0;
            if (action.payload) {
                state.error = action.payload.message
            } else {
                state.error = action.error.message
            };
            state.loading = false
        })
    }
})

export default pizzasSlice.reducer