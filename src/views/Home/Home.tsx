import Categories from '@components/UI/Categories/Categories'
import EmptyResult from '@components/UI/EmptyResult/EmptyResult'
import Pagination from '@components/UI/Pagination/Pagination'
import PizzaCard from '@components/Pizza/PizzaCard/PizzaCard'
import Sort from '@components/UI/Sort/Sort'
import React, { FC, useCallback, useEffect } from 'react'
import { setCategoryID, setCurrentPage } from 'store/filter/filterSlice'
import { fetchPizzas } from 'store/pizzas/pizzaAsyncThunk'
import { useAppDispatch, useAppSelector } from 'store/store'
import styles from './Home.module.scss'
import PizzaSkeleton from '@components/Pizza/PizzaSkeleton/PizzaSkeleton'
import { pizzaImagesMiddle } from '@utils/pizzasImages'

const Home: FC = () => {
    const { pizzas, loading, error, count } = useAppSelector(
        (state) => state.pizzas
    )
    const { categoryID, searchValue, currentPage, sortNameObj } =
        useAppSelector((state) => state.filter)
    const dispatch = useAppDispatch()

    const handleChangeCategory = useCallback((index: number) => {
        dispatch(setCategoryID(index))
        dispatch(setCurrentPage(1))
    }, [])

    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    const pizzaList = pizzas?.map((item) => {
        const pizzaImg = pizzaImagesMiddle[item.title]

        return <PizzaCard key={item.id} item={item} pizzaImg={pizzaImg} />
    })

    const skeletons = [...new Array(4)].map((_, index) => (
        <PizzaSkeleton key={index} />
    ))

    const loadedPizzas = loading ? skeletons : pizzaList

    useEffect(() => {
        dispatch(fetchPizzas())
    }, [categoryID, searchValue, sortNameObj, currentPage])

    if (error) {
        return <EmptyResult title='Произошла ошибка' />
    }

    if (!loading && (!pizzas || pizzas?.length === 0)) {
        return <EmptyResult title='Пиццы не найдены' />
    }

    return (
        <div className={styles.home__container}>
            <div className={styles.content__header}>
                <Categories
                    handleChangeCategory={handleChangeCategory}
                    value={categoryID}
                />
                <Sort sortNameObj={sortNameObj} />
            </div>
            <h2>Все пиццы</h2>
            <section className={styles.content__list}>{loadedPizzas}</section>
            <Pagination
                handleChangePage={handleChangePage}
                currentPage={currentPage}
                itemsLength={count}
            />
        </div>
    )
}

export default Home
