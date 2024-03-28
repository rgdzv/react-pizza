import React, { FC } from 'react'
import styles from './Button.module.scss'
import { classNames } from '@utils/classNames'

type ButtonClassNameType = 'add' | 'return' | 'category' | 'sort' | 'pizzaType' | 'pizzaSize'

interface ButtonProps {
    children?: string;
    onClick?: () => void;
    className?: ButtonClassNameType
    categoryActive?: boolean
    pizzaTypeActive?: boolean
    pizzaSizeActive?: boolean
}

const Button: FC<ButtonProps> = ({ children, onClick, className, categoryActive, pizzaTypeActive, pizzaSizeActive }) => {

    const buttonClassName = classNames(
        styles.button, 
        {
            [styles.categoryActive]: categoryActive,
            [styles.pizzaTypeActive]: pizzaTypeActive,
            [styles.pizzaSizeActive]: pizzaSizeActive
        }, 
        [styles[className as ButtonClassNameType]]
    )
    
    return (
        <button
            className={buttonClassName}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
