import React, { FC, memo } from 'react'
import styles from './Categories.module.scss'
import { categoriesNamesList } from '@utils/pizzaInfo'
import Button from '@components/UI/Button/Button'

interface CategoriesProps {
    handleChangeCategory: (index: number) => void;
    value: number
}

const Categories: FC<CategoriesProps> = ({ handleChangeCategory, value }) => {
    
    const categories = categoriesNamesList.map((category, ind) => {
        const onClick = () => {
            handleChangeCategory(ind)
        }
        const active = value === ind

        return (
            <li 
                key={category} 
            >
                <Button onClick={onClick} className='category' active={active}>{category}</Button>
            </li>
        )
})

    return (
        <div className={styles.categories}>
            <ul>
                {categories}
            </ul>
        </div>
    )
}

export default memo(Categories)