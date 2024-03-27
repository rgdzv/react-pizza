import React, { FC, memo } from 'react'
import styles from './Sort.module.scss'
import arrow from '@images/arrow.png'
import { sortNamesList } from '@utils/pizzaInfo'
import { useAppDispatch } from 'store/store'
import { SortType } from 'store/filter/types'
import { Popover } from '@headlessui/react'
import Button from '@components/UI/Button/Button'
import Icon from 'components/UI/Icon/Icon'
import { setSortName } from 'store/filter/filterSlice'

interface SortProps {
    sortNameObj: SortType
}

const Sort: FC<SortProps> = ({ sortNameObj }) => {
    const dispatch = useAppDispatch()

    const handleSelectSortName = (obj: SortType) => {
        dispatch(setSortName(obj))
    }

    const sortNames = sortNamesList.map(sortName => {

        return (
            <li 
                key={sortName.name} 
                className={sortNameObj.name === sortName.name ? styles.active : ''}
            >
                <div className={styles.buttons}>
                    <Icon name='#arrow-up' title='По возрастанию' onClick={() => handleSelectSortName({...sortName, order: 'asc'})}/>
                    <Icon name='#arrow-down' title='По убыванию' onClick={() => handleSelectSortName({...sortName, order: 'desc'})}/>
                </div>
                <p>{sortName.name}</p>
            </li>
        )
    })

    return (
        <Popover className={styles.sort}>
            <Popover.Button as={Button} className='sort'>
                <img src={arrow} alt="Сортировка"/>
                <span>Сортировка по:</span>
                <span>{sortNameObj.name}</span>
            </Popover.Button>

            <Popover.Panel className={styles.sort__popup}>
                <ul>
                    {sortNames}
                </ul>
            </Popover.Panel>
        </Popover>
    )
}

export default memo(Sort)