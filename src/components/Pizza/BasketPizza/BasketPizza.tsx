import Icon from '@components/UI/Icon/Icon'
import { finalPrice } from '@utils/priceFormat'
import React, { FC } from 'react'
import { addPizzaToBasket, minusPizzaFromBasket, removePizzaFromBasket } from 'store/basket/basketSlice'
import { BasketItem } from 'store/basket/types'
import { useAppDispatch } from 'store/store'
import styles from './BasketPizza.module.scss'
import { pizzaImagesMiddle } from '@utils/pizzasImages'

interface BasketPizzaProps {
    item: BasketItem
}

const BasketPizza: FC<BasketPizzaProps> = ({ item }) => {

    const dispatch = useAppDispatch()
    const price = finalPrice(item.price * item.count)

    const handlePlusPizza = () => {
        dispatch(addPizzaToBasket(item))
    }

    const handleMinusPizza = () => {
        dispatch(minusPizzaFromBasket(item))
    }

    const handleremovePizza = () => {
        dispatch(removePizzaFromBasket(item))
    }

    const disabledButton = item.count === 1

    const imgSrc = pizzaImagesMiddle[item.title]
    
    return (
        <div className={styles.basket__section}>
            <div className={styles.basket__pizza}>
                <img src={imgSrc} alt={item.title} />
                <div className={styles.basket__pizza__info}>
                    <p>{item.title}</p>
                    <span>{item.type}, {item.size} см</span>
                </div>
            </div>
            <div className={styles.basket__pizza__number}>
                <Icon name="#minus" onClick={handleMinusPizza} disabled={disabledButton} title="Убрать"/>
                <span>{item.count}</span>
                <Icon name="#plus" onClick={handlePlusPizza} title="Добавить"/>
            </div>
            <div className={styles.basket__pizza__price}>{price}</div>
            <div className={styles.basket__pizza__remove}>
                <Icon name="#remove" onClick={handleremovePizza} title="Удалить"/>
            </div>
        </div>
    )
}

export default BasketPizza