import React, { FC } from 'react'
import styles from './PizzaSkeleton.module.scss'
import skeleton from '@images/skeleton.jpg'

const PizzaSkeleton: FC = () => {
    return (
        <div className={styles.skeleton}>
            <img src={skeleton} className={styles.picture}/>
            <div className={styles.title}></div> 
            <div className={styles.rating}></div> 
            <div className={styles.info}></div> 
            <div className={styles.footer}></div> 
        </div>
    )
}

export default PizzaSkeleton