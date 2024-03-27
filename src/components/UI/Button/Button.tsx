import React, { FC } from 'react'
import styles from './Button.module.scss'
import { classNames } from '@utils/classNames'

type ButtonClassNameType = 'add' | 'return' | 'category' | 'sort'

interface ButtonProps {
    children?: string;
    onClick?: () => void;
    addedCount?: number,
    className?: ButtonClassNameType
    active?: boolean
}

const Button: FC<ButtonProps> = ({ children, onClick, addedCount, className, active }) => {

    const numberOfSpecificPizzas = (addedCount ? addedCount : 0) > 0 && <i>{addedCount}</i>
    const buttonClassName = classNames(
        styles.button, 
        {
            [styles.active]: active
        }, 
        [styles[className as ButtonClassNameType]]
    )
    
    return (
        <button
            className={buttonClassName}
            onClick={onClick}
        >
            {children}
            {numberOfSpecificPizzas}
        </button>
    )
}

export default Button
