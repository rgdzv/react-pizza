import Button from '@components/UI/Button/Button'
import { finalPrice } from '@utils/priceFormat'
import React, { FC,  useState} from 'react'
import styles from './PizzaCard.module.scss'
import { Pizza } from 'store/pizzas/types'
import { typeNames } from '@utils/pizzaInfo'
import { useAppDispatch, useAppSelector } from 'store/store'
import { addPizzaToBasket } from 'store/basket/basketSlice'
import { findBasketItemById } from 'store/basket/selectors'

interface PizzaProps {
    item: Pizza
    pizzaImg: string
}

const PizzaCard: FC<PizzaProps> = ({ item, pizzaImg }) => {

    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    const dispatch = useAppDispatch()
    const basketItem = useAppSelector(findBasketItemById(item.id))

    const types = item.types.map(type => (
        <li 
            key={type} 
        >
            <Button onClick={() => setActiveType(type)} className='pizzaType' pizzaTypeActive={activeType === type}>
                {typeNames[type]}
            </Button>
        </li>
    ))

    const sizes = item.sizes.map((size, ind) => (
        <li 
            key={size}
        >
            <Button onClick={() => setActiveSize(ind)} className='pizzaSize' pizzaSizeActive={activeSize === ind}>
                {`${size} см`}
            </Button>
        </li>
    ))

    const specificPizzaPrice = item.price[typeNames[activeType]][item.sizes[activeSize]] 

    const price = finalPrice(specificPizzaPrice)

    const amountOfAddedPizza = basketItem > 0 && <i>{basketItem}</i>
    
    const handleAddPizzaToBasket = () => {
        const { id, title, price, sizes } = item

        const pizza = {
            id,
            title,
            price: price[typeNames[activeType]][sizes[activeSize]],
            type: typeNames[activeType],
            size: sizes[activeSize],
            count: 0
        }

        dispatch(addPizzaToBasket(pizza))
    }

    return (
        <div className={styles.pizzaCard}>
            {amountOfAddedPizza}
            <img src={pizzaImg} alt={item.title} />
            <div className={styles.pizzaCard__name}>{item.title}</div>
            <div className={styles.pizzaCard__rating}>Рейтинг: {item.rating}</div>
            <div className={styles.pizzaCard__info}>
                <ul>
                    {types}
                </ul>
                <ul>
                    {sizes}
                </ul>
            </div>
            <div className={styles.pizzaCard__footer}>
                <div className={styles.pizzaCard__footer__price}>от {price}</div>
                <Button onClick={handleAddPizzaToBasket} className='add'>
                    Добавить
                </Button>
            </div>
        </div>
    )
}

export default PizzaCard