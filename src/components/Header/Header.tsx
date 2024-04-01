import React, { FC } from 'react'
import styles from './Header.module.scss'
import cart from '@images/cart.png'
import logo from '@images/logo.png'
import Search from '@components/UI/Search/Search'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/store'
import { finalPrice } from '@utils/priceFormat'
import { setSearchValue } from 'store/filter/filterSlice'

const Header: FC = () => {
    
    const { error } = useAppSelector(state => state.pizzas)
    const { basketPizzas, totalPrice } = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const totalNumber = basketPizzas.reduce((acc, obj) => acc + obj.count, 0)
    const fullPrice = finalPrice(totalPrice)

    const handleInputClear = () => {
        dispatch(setSearchValue(''))
    }

    const showInfo = (location.pathname === '/' && !error) &&
        <>
            <Search/>
            <Link to='basket' onClick={handleInputClear} className={styles.basketLink}>
                <div className={styles.basket}>
                    <span>{fullPrice}</span>
                    <div className={styles.basket__line}></div>
                    <div className={styles.basket__count}>
                        <img src={cart} alt="Корзина" />
                        <span>{totalNumber}</span>
                    </div>
                </div>
            </Link>
        </>

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logoLink}>
                <div className={styles.logo}>
                    <img src={logo} alt="Логотип" />
                    <div className={styles.logo__sign}>
                        <h3>REACT PIZZA</h3>
                        <span>самая вкусная пицца во вселенной</span>
                    </div>
                </div>
            </Link>
            {showInfo}
        </header>
    )
}

export default Header