export interface PizzaReturnType {
    items: Pizza[];
    count: number
}

export interface PizzasState {
    pizzas: Pizza[] | undefined | [] | null;
    loading: boolean;
    error: null | string | undefined;
    count: number
}

interface PizzaPrice {
    [key: string]: {
        [key: string]: number
    }
}

export interface Pizza {
    id: string;
    title: string;
    price: PizzaPrice;
    sizes: number[];
    types: number[];
    rating: number
}

export interface ErrorType {
    message: string
}

export type PizzaParams = {
    category: string | null;
    search: string;
    sortBy: string;
    order: string;
    page: string
}