import React, { FC, ReactNode } from 'react'
import styles from './Icon.module.scss'
import sprite from '@images/sprite.svg'
import { classNames } from '@utils/classNames';

type IconClassNameType = 'trash'

interface IconProps {
    children?: ReactNode;
    name: string;
    onClick: () => void;
    disabled?: boolean;
    title: string;
    className?: IconClassNameType
}

const Icon: FC<IconProps> = ({ children, name, onClick, disabled, title, className }) => {

    const iconClassName = classNames(styles.button, {}, [styles[className as IconClassNameType]])

    return (
        <button 
            className={iconClassName}
            onClick={onClick}
            disabled={disabled}
        >
            <svg>
                <title>{title}</title>
                <use xlinkHref={`${sprite}${name}`}/>
            </svg>
            {children}
        </button>
    )
}

export default Icon