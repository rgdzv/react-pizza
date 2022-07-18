import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { ErrorType, PizzaParams, PizzaReturnType } from "./types"

export const fetchPizzas = createAsyncThunk<PizzaReturnType, PizzaParams, { rejectValue: ErrorType }>(
    'pizzas/fetchPizzasStatus',
    async (obj, { rejectWithValue }) => {
        try {
            const { category, search, sortBy, order, page } = obj
            const { data } = await axios.get<PizzaReturnType>(`https://62b98129ff109cd1dc93c9b5.mockapi.io/pizzas`, {
                params: {
                    page,
                    limit: 4,
                    category,
                    sortBy,
                    order,
                    search
                }
            })
            return data
        } catch (error) {
            return rejectWithValue(error as ErrorType)
        }
    }
)