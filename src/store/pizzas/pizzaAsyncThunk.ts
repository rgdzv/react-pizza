import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "store/store"
import { ErrorType, PizzaReturnType } from "./types"

export const fetchPizzas = createAsyncThunk<PizzaReturnType, void, { rejectValue: ErrorType, state: RootState}>(
    'pizzas/fetchPizzasStatus',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { filter } = getState() 
            const category = filter.categoryID > 0 ? String(filter.categoryID) : null
            const search = filter.searchValue
            const sortBy = filter.sortNameObj.sortProperty
            const order = filter.sortNameObj.order
            const page = String(filter.currentPage)
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