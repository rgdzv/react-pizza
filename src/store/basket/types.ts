export interface BasketItem {
    id: string;
    title: string;
    price: number;
    type: string;
    size: number;
    count: number
}

export interface BasketState {
    basketPizzas: BasketItem[];
    totalPrice: number
}