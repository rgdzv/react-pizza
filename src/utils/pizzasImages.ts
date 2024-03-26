import margarita from '@images/pizzas/margarita/margarita.png'
import fourSeasons from '@images/pizzas/fourseasons/fourseasons.png'
import pepperoni from '@images/pizzas/pepperoni/pepperoni.png'
import cheeseburger from '@images/pizzas/cheeseburger/cheeseburger.png'
import vegandmush from '@images/pizzas/vegandmush/vegandmush.png'
import cheese from '@images/pizzas/cheese/cheese.png'
import pepperonifresh from '@images/pizzas/pepperonifresh/pepperonifresh.png'
import barbecuechicken from '@images/pizzas/barbecuechicken/barbecuechicken.png'
import chickenranch from '@images/pizzas/chickenranch/chickenranch.png'
import crazypepperoni from '@images/pizzas/crazypepperoni/crazypepperoni.png'

type PizzaImagesInterface = Record<string, string>

export const pizzaImagesMiddle: PizzaImagesInterface = {
    'Маргарита': margarita,
    'Четыре сезона': fourSeasons,
    'Пепперони': pepperoni,
    'Чизбургер': cheeseburger,
    'Овощи и грибы': vegandmush,
    'Сырная': cheese,
    'Пепперони фреш': pepperonifresh,
    'Цыпленок барбекю': barbecuechicken,
    'Цыпленок ранч': chickenranch,
    'Крэйзи пепперони': crazypepperoni
}